const router = require("express").Router();
const auth = require("../middlewares/auth");
const Booking = require("../models/Booking");

router.post("/", auth, async (req,res)=>{
  const { vendorId, amount, orderId } = req.body;
  const booking = await Booking.create({
    user: req.user.id, vendor: vendorId, amount, orderId, status: orderId ? "paid" : "pending"
  });
  res.json(booking);
});

module.exports = router;