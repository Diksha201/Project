const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type:String, unique:true },
  password: String,
  role: { type:String, enum:["customer","vendor","admin"], default:"customer" },
  avatar: String,
  wishlist: [{ type: Schema.Types.ObjectId, ref: "Vendor" }],
});
module.exports = model("User", userSchema);