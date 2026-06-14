const express = require('express');
const auth = require('../middlewares/auth');
const { createPaymentIntent, handleWebhook } = require('../controllers/Payment');
const router = express.Router();

router.post('/create-payment-intent', auth, createPaymentIntent);

// Stripe webhook endpoint (no auth, must be raw body)
router.post('/webhook', express.raw({ type: 'application/json' }), handleWebhook);

module.exports = router;