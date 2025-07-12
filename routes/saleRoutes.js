// Routes for sale
// routes/saleRoutes.js
const express = require('express');
const router = express.Router();
const Tile = require('../models/Tile');

router.post('/', async (req, res) => {
  try {
    const items = req.body.items.map(item => ({ ...item, type: 'sale' }));
    const result = await Tile.insertMany(items);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add sales' });
  }
});

router.get('/', async (req, res) => {
  try {
    const sales = await Tile.find({ type: 'sale' });
    res.json(sales);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch sales' });
  }
});

module.exports = router;
