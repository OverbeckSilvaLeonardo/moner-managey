import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
  id: { type: String },
  description: { type: String, required: true },
  amount: { type: mongoose.Types.Decimal128, required: true },
  date: { type: Date, required: true },
});

const income = mongoose.model('incomes', incomeSchema);

export default income;