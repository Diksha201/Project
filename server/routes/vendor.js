const express = require("express");
const router = express.Router();
const Vendor = require("../models/Vendor");

/* 🔹 GET ALL VENDORS */
router.get("/search", async (req, res) => {
  try {
    const { service, city } = req.query;

    const filter = {};

    if (service) {
      filter.service = { $regex: `^${service}$`, $options: "i" };
    }

    if (city) {
      filter.city = { $regex: `^${city}$`, $options: "i" };
    }

    const vendors = await Vendor.find(filter);

    res.json(vendors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports=router;