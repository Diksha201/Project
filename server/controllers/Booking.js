const Booking = require('../models/Booking');
const Vendor = require('../models/Vendor');
const Order = require('../models/Order');

exports.createBooking = async (req, res) => {
  /**
   * Expects:
   *  - vendorId, date (ISO), serviceType, amount
   * Flow:
   *  - create booking (unpaid)
   *  - client will call createPaymentIntent with bookingId to pay
   */
  try {
    const { vendorId, date, serviceType, amount } = req.body;
    const vendor = await Vendor.findById(vendorId);
    if (!vendor) return res.status(404).json({ message: 'Vendor not found' });

    const booking = await Booking.create({
      userId: req.user.id,
      vendorId,
      date,
      serviceType,
      amount,
      status: 'Pending',
      paymentStatus: 'unpaid'
    });

    res.status(201).json({ booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Booking creation failed' });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).populate('vendorId');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    if (booking.userId.toString() !== req.user.id) return res.status(403).json({ message: 'Not allowed' });

    // if paid -> refund flow (not in this basic implementation)
    booking.status = 'Cancelled';
    booking.paymentStatus = booking.paymentStatus === 'paid' ? 'refunded' : booking.paymentStatus;
    await booking.save();

    // update order if present
    if (booking.orderId) {
      await Order.findByIdAndUpdate(booking.orderId, { status: booking.paymentStatus === 'refunded' ? 'refunded' : 'failed' });
    }

    res.json({ message: 'Booking cancelled', booking });
  } catch (err) {
    res.status(500).json({ message: 'Cancel failed' });
  }
};