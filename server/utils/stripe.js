const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

async function createCheckoutSession(service, customerEmail) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: customerEmail,
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: service.name,
              description: service.description,
            },
            unit_amount: service.price * 100, // amount in paise
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    return session;
  } catch (error) {
    console.error('Stripe session error:', error);
    throw error;
  }
}

module.exports = {
  createCheckoutSession,
};