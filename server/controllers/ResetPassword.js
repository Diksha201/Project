const User = require('../models/User');
const bcrypt = require('bcryptjs');
const sendEmail = require('../utils/sendEmail');
const generateOTP = require('../utils/generateOTP');

// Step 1: Request OTP for password reset
exports.requestReset = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).send('User not found');

    const otp = generateOTP();
    user.otp = otp;
    await user.save();

    await sendEmail(email, `Your password reset OTP is ${otp}`);
    res.send('OTP sent to your email');
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Step 2: Verify OTP before allowing password reset
exports.verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.otp !== otp) {
      return res.status(400).send('Invalid OTP');
    }

    res.send('OTP verified');
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Step 3: Reset password using verified OTP
exports.resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.otp !== otp) {
      return res.status(400).send('Invalid OTP');
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.otp = null;
    await user.save();

    res.send('Password reset successful');
  } catch (err) {
    res.status(500).send('Server error');
  }
};