const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
  amount: { type: Number, required: true }, // in smallest currency unit (e.g. paise/cents)
  currency: { type: String, default: 'inr' },
  paymentIntentId: { type: String },
  status: { type: String, enum: ['created','paid','failed','refunded'], default: 'created' },
  metadata: { type: Object },
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);