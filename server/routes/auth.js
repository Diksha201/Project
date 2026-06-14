const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const passport = require("passport");
const auth = require("../middlewares/auth");

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google Callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect(process.env.CLIENT_URL + "/dashboard"); // redirect after login
  }
);

// Facebook Login
router.get("/facebook", passport.authenticate("facebook", { scope: ["email"] }));

// Facebook Callback
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect(process.env.CLIENT_URL + "/dashboard");
  }
);


router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already used" });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName: firstName || "",
      lastName: lastName || "",
      email,
      password: hash,
      role: role || "customer",
    });

    res.json({
      message: "User registered successfully",
      user: { ...user.toObject(), password: undefined },
    });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req,res)=>{
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if(!user) return res.status(400).json({ message:"Invalid credentials" });
  const ok = await bcrypt.compare(password, user.password);
  if(!ok) return res.status(400).json({ message:"Invalid credentials" });
  const token = jwt.sign({ id:user._id, role:user.role }, process.env.JWT_SECRET || "devsecret", { expiresIn: "7d" });
  res.json({ token, user: { ...user.toObject(), password: undefined } });
});

router.get("/me", auth, async (req,res)=>{
  const user = await User.findById(req.user.id);
  res.json({ user: { ...user.toObject(), password: undefined } });
});

module.exports = router;