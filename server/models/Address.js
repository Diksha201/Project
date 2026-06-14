const { Schema, model } = require("mongoose");
const addressSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  line1: String,
  line2: String,
  city: String,
  state: String,
  pincode: String,
});
module.exports = model("Address", addressSchema);