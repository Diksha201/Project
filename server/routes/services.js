const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Service = require('../models/Service');
const verifyToken = require('../middlewares/verifyToken');

// ✅ GET all or filtered services
router.get('/', async (req, res) => {
  try {
    const { location, category } = req.query;
    const query = {};

    if (location) query.location = location;
    if (category) query.category = category;

    const services = await Service.find(query).populate('vendor');
    res.status(200).json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ✅ POST Create service (Only Vendor)
router.post('/', verifyToken, async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({ error: 'Failed to create service' });
  }
});

// ✅ PUT Update service
router.put('/:id', verifyToken, async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid service ID' });
  }

  try {
    const updatedService = await Service.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedService) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.status(200).json(updatedService);
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({ error: 'Failed to update service' });
  }
});

// ✅ DELETE service
router.delete('/:id', verifyToken, async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid service ID' });
  }

  try {
    const deleted = await Service.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({ error: 'Failed to delete service' });
  }
});

module.exports = router;