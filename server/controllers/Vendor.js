const Vendor = require('../models/Vendor');

exports.listVendors = async (req, res) => {
  const vendors = await Vendor.find();
  res.json(vendors);
};

exports.createVendor = async (req, res) => {
  const vendor = await Vendor.create(req.body);
  res.status(201).json(vendor);
};

exports.updateVendor = async (req, res) => {
  const v = await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(v);
};

exports.deleteVendor = async (req, res) => {
  await Vendor.findByIdAndDelete(req.params.id);
  res.json({ message: 'Vendor deleted' });
};

exports.getVendor = async (req, res) => {
  const vendor = await Vendor.findById(req.params.id);
  res.json(vendor);
};


exports.searchVendors = async (req, res) => {
  try {
    let { service, city } = req.query;

    service = service?.trim();
    city = city?.trim();

    const vendors = await Vendor.find({
      service: { $regex: `^${service}$`, $options: "i" },
      city: { $regex: `^${city}$`, $options: "i" },
    });

    res.status(200).json(vendors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};