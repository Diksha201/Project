const express = require('express');
const passport = require('passport');
const router = express.Router();
const {
  getUserProfile,
  uploadProfilePicture,
  logout,
} = require('../controllers/userController');
const { protect } = require('../middlewares/auth');



// Google Login Initiate
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google Callback
router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: 'http://localhost:3000/login',
    successRedirect: 'http://localhost:3000/dashboard', // Redirect after success
  })
);

// Facebook Login Initiate
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

// Facebook Callback
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: 'http://localhost:3000/login',
    successRedirect: 'http://localhost:3000/dashboard',
  })
);

// ==========================
// 👤 User Profile Routes
// ==========================

// Get logged-in user profile
router.get('/profile', protect, getUserProfile);

// Upload/update profile picture
router.post('/profile/picture', protect, uploadProfilePicture);

// Logout
router.post('/logout', protect, logout);

module.exports = router;