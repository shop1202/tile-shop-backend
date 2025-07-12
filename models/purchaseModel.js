const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  name: String,
  size: String,
  quantity: Number,
  price: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Purchase", purchaseSchema);
