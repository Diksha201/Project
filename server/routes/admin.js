const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Booking = require('../models/Booking');
const Service = require('../models/Service');

// Get all users
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Get all bookings
router.get('/bookings', async (req, res) => {
  const bookings = await Booking.find().populate('customer service');
  res.json(bookings);
});

// Get all services
router.get('/services', async (req, res) => {
  const services = await Service.find().populate('vendor');
  res.json(services);
});

module.exports = router;