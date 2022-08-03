import mongoose from "mongoose";

const schema = new mongoose.Schema({
  id: { type: String },
  description: { type: String, required: true },
  amount: { type: mongoose.Types.Decimal128, required: true },
  date: { type: Date, required: true },
});

const Expense = mongoose.model('expenses', schema);

export default Expense;