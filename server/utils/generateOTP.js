const generateOTP = (length = 6) => {
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10); // 0-9
  }
  return otp;
};

module.exports = function generateOTP(){
  return Math.floor(100000 + Math.random() * 900000).toString();
};