const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  name: String,
  size: String,
  quantity: Number,
  price: Number,
}, { timestamps: true }); // ⬅️ enables createdAt/updatedAt

module.exports = mongoose.model('Sale', saleSchema);
