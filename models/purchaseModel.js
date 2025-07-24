const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  name: String,
  size: String,
  quantity: Number,
  price: Number,
}, { timestamps: true }); // ⬅️ this adds createdAt and updatedAt

module.exports = mongoose.model('Purchase', purchaseSchema);
