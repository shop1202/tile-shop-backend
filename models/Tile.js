// models/Tile.js
const mongoose = require('mongoose');

const tileSchema = new mongoose.Schema({
  name: String,
  size: String,
  quantity: Number,
  price: Number,
  type: String, // 'purchase' or 'sale'
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Tile', tileSchema);
