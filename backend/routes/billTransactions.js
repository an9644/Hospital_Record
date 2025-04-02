const express = require("express");
const Transaction = require("../models/Transaction");
const mongoose =require("mongoose")

const router = express.Router();

// Add a new transaction
router.post("/", async (req, res) => {
  try {
    const newTransaction = new Transaction(req.body);
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Get all transactions
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Example route to fetch transaction by ID
router.get("/search", async (req, res) => {
  try {
    const { receiptNumber } = req.query;

    if (!receiptNumber) {
      return res.status(400).json({ error: "Receipt number is required" });
    }

    const transactions = await Transaction.find({ receiptNumber });

    if (transactions.length === 0) {
      return res.status(404).json({ error: "No transactions found for this receipt number" });
    }

    res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
