// routes/purchaseRoutes.js
const express = require('express');
const router = express.Router();
const Tile = require('../models/Tile');

router.post('/', async (req, res) => {
  try {
    const items = req.body.items.map(item => ({ ...item, type: 'purchase' }));
    const result = await Tile.insertMany(items);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add purchases' });
  }
});

router.get('/', async (req, res) => {
  try {
    const purchases = await Tile.find({ type: 'purchase' });
    res.json(purchases);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch purchases' });
  }
});

module.exports = router;
