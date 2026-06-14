const router = require("express").Router();
const auth = require("../middlewares/auth");
const User = require("../models/User");

router.post("/", auth, async (req,res)=>{
  const { vendorId } = req.body;
  const user = await User.findById(req.user.id);
  if(!user.wishlist.includes(vendorId)) user.wishlist.push(vendorId);
  await user.save();
  await user.populate("wishlist");
  res.json({ items: user.wishlist });
});

module.exports = router;