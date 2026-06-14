const { Schema, model } = require("mongoose");
const bookingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  vendor: { type: Schema.Types.ObjectId, ref: "Vendor" },
  amount: Number,
  status: { type:String, enum:["pending","paid","confirmed","cancelled"], default:"pending" },
  orderId: String,
});
module.exports = model("Booking", bookingSchema);