const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: String,
  email: String,   // ✔️ IMPORTANT FIX (was missing)
  phone: String,
  address: String,
  city: String,
  products: Array,
  totalPrice: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
