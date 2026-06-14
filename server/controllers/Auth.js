const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/sendEmail');
const otpGenerator = require('otp-generator');
const OTP = require("../models/OTP");
const Profile = require("../models/Profile");
require("dotenv").config()


exports.register = async (req, res) => {
  try {
    const { name, email, password, role, location } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).send('Email already in use');

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = generateOTP();

    const user = new User({ name, email, password: hashedPassword, role, location, otp });
    await user.save();
    await sendEmail(email, `Your OTP is ${otp}`);
    res.status(201).send('OTP sent to your email');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.verifyEmail = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.otp !== otp) return res.status(400).send('Invalid OTP');
    user.isVerified = true;
    user.otp = null;
    await user.save();
    res.send('Email verified');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !user.isVerified) return res.status(403).send('Verify email first');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send('Invalid credentials');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.sendOTP = async(req,res)=>{
  try{
  const {email} =req.body;
  const checkUserPresent = await User.findOne({email});
  if(checkUserPresent){
    return res.status(401).json({
      success:false,
      message:'User already registered',
    })
  }
  var otp=otpGenerator.generator(6,{
    upperCaseAlphabets:false,
    lowerCaseAlphabets:false,
   specialChars:false,

  });
  console.log("OTP generated: ",otp);
  const result = await OTP.findOne({otp: otp});
  while(result){
    otp=otpGenerator(6,{
      upperCaseAlphabets:false,
    lowerCaseAlphabets:false,
   specialChars:false,
    });
     result = await OTP.findOne({otp: otp});
  }
  const otpPayload = {email,otp};
  // create an empty font
  const otpBody = await OTP.create(otpPayload);
  console.log(otpBody);
  // return response successful
  res.status(200).json({
    success: true,
    message:'OTP Sent Success',
    otp,
  })
}
catch(error){
  console.log(error);
  return res.status(500).json({
    success:false,
    message:error.message,
  })
}
};
