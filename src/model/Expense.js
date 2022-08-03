import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  id: { type: String },
  description: { type: String, required: true },
  amount: { type: mongoose.Types.Decimal128, required: true },
  date: { type: Date, required: true },
});

const expense = mongoose.model('expenses', expenseSchema);

export default expense;