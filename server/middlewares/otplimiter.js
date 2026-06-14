const rateLimit = require('express-rate-limit');

// Apply to routes like /register or /verify
const otpRateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 3, // limit each IP to 3 OTP requests per windowMs
  message: 'Too many OTP requests. Please try again later.'
});

module.exports = otpRateLimiter;