const router = require("express").Router();
// This is a MOCK. Replace with Razorpay/Stripe as needed.
router.post("/create-order", async (req,res)=>{
  const { amount } = req.body;
  const orderId = "VV-" + Date.now();
  res.json({ orderId, amount, currency: "INR" });
});
module.exports = router;