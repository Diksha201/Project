const Service = require('../models/Service');

exports.getAllServices = async (req, res) => {
  try {
    const { location, category } = req.query;
    const query = {};
    if (location) query.location = location;
    if (category) query.category = category;

    const services = await Service.find(query).populate('vendor');
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createService = async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json(service);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateService = async (req, res) => {
  try {
    const updated = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.send('Service deleted');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};