const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    service: { type: String, required: true },
    city: { type: String, required: true },
    price: { type: Number },
    rating: { type: Number, default: 0 },
    description: String,
    phone: String,
    email: String,
    image: String,
    
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vendor", vendorSchema);