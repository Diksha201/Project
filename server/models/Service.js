const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: String,
  category: String,
  location: String,
  description: String,
  priceStart: Number,
  priceEnd: Number,
  availability: String,
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Service', serviceSchema);