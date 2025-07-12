const express = require("express");
const router = express.Router();
const Purchase = require("../models/purchaseModel");
const Sale = require("../models/saleModel");

// GET /api/stock - returns stock summary per item
router.get("/", async (req, res) => {
  try {
    // Get all purchase and sale data
    const purchases = await Purchase.find();
    const sales = await Sale.find();

    const stockMap = {};

    // Tally purchase quantities
    purchases.forEach((entry) => {
      const key = entry.name.trim().toLowerCase();
      if (!stockMap[key]) {
        stockMap[key] = {
          name: entry.name,
          purchaseQty: 0,
          saleQty: 0,
        };
      }
      stockMap[key].purchaseQty += entry.quantity;
    });

    // Tally sale quantities
    sales.forEach((entry) => {
      const key = entry.name.trim().toLowerCase();
      if (!stockMap[key]) {
        stockMap[key] = {
          name: entry.name,
          purchaseQty: 0,
          saleQty: 0,
        };
      }
      stockMap[key].saleQty += entry.quantity;
    });

    // Compute final stock
    const stockSummary = Object.values(stockMap).map((item) => ({
      name: item.name,
      purchaseQty: item.purchaseQty,
      saleQty: item.saleQty,
      stockQty: item.purchaseQty - item.saleQty,
    }));

    res.json(stockSummary);
  } catch (err) {
    console.error("Error fetching stock:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
