const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  receiptNumber: { type: String, required: true },
  patientName: { type: String, required: true },
  clientName: { type: String, required: true },
  visitDate: { type: Date, required: true },
  visitID: { type: String, required: true },
  grossAmount: { type: Number, required: true },
  discount: { type: Number, required: true },
  netAmount: { type: Number, required: true },
  paidAmount: { type: Number, required: true },
  dueAmount: { type: Number, required: true },
  modeOfPayment: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);
