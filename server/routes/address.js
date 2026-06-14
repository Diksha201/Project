const router = require("express").Router();
const auth = require("../middlewares/auth");
const Address = require("../models/Address");

router.post("/", auth, async (req,res)=>{
  const { line1, line2, city, state, pincode } = req.body;
  await Address.create({ user: req.user.id, line1, line2, city, state, pincode });
  const addresses = await Address.find({ user: req.user.id });
  res.json({ addresses });
});

module.exports = router;