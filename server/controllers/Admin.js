const User = require('../models/User');
const Booking = require('../models/Booking');
const Service = require('../models/Service');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('customer service');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find().populate('vendor');
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};