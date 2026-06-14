const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const Order = require('../models/Order');
const Booking = require('../models/Booking');

exports.createPaymentIntent = async (req, res) => {
  /**
   * Expects:
   *  - bookingId (optional) OR amount,currency
   *  - metadata (optional)
   */
  try {
    const { bookingId, amount, currency = 'inr', metadata = {} } = req.body;

    let finalAmount = amount;
    if (bookingId) {
      const booking = await Booking.findById(bookingId);
      if (!booking) return res.status(404).json({ message: 'Booking not found' });
      // convert to smallest unit: rupees -> paise (for Stripe INR multiply by 100)
      finalAmount = Math.round(booking.amount * 100);
    } else {
      finalAmount = Math.round(amount * 100);
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: finalAmount,
      currency,
      metadata,
    });

    // Save order
    const order = await Order.create({
      userId: req.user.id,
      bookingId: bookingId || null,
      amount: finalAmount,
      currency,
      paymentIntentId: paymentIntent.id,
      status: 'created',
      metadata
    });

    // If booking present, attach order id so booking can be updated after payment
    if (bookingId) {
      await Booking.findByIdAndUpdate(bookingId, { orderId: order._id });
    }

    return res.json({ clientSecret: paymentIntent.client_secret, orderId: order._id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Payment creation failed', error: err.message });
  }
};

// Stripe webhook to update order/booking upon payment events
exports.handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  try {
    if (event.type === 'payment_intent.succeeded') {
      const pi = event.data.object;
      const order = await Order.findOne({ paymentIntentId: pi.id });
      if (order) {
        order.status = 'paid';
        await order.save();

        if (order.bookingId) {
          await Booking.findByIdAndUpdate(order.bookingId, { paymentStatus: 'paid', status: 'Confirmed' });
        }
      }
    } else if (event.type === 'payment_intent.payment_failed') {
      const pi = event.data.object;
      const order = await Order.findOne({ paymentIntentId: pi.id });
      if (order) {
        order.status = 'failed';
        await order.save();
      }
    }
    // handle other events as needed
    res.json({ received: true });
  } catch (err) {
    console.error('Error processing webhook', err);
    res.status(500).send();
  }
};