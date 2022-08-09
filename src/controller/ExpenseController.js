import Expense from '../model/Expense.js';

export default class ExpenseController {
  static list(req, res) {
    Expense.find((err, expenses) => {
      if (err) {
        return res.status(500).json({ message: `${ err.message } - unable to fetch expense data` });
      }

      let data = expenses.map(({ _id, description, amount, date }) => {
        return { id: _id, description, amount: amount.toString(), date };
      });

      return res.status(200).json({ message: `query successful`, data });
    });
  }

  static add(req, res) {
    const toBeAdded = new Expense(req.body);

    if (!/\d+\.\d{2}/i.test(toBeAdded.amount.toString())) {
      return res.status(400).json({ message: 'Invalid amount format' });
    }

    Expense.find({
      description: toBeAdded.description,
      date: {
        $gte: new Date(toBeAdded.date.getFullYear(), toBeAdded.date.getMonth(), 1),
        $lte: new Date(toBeAdded.date.getFullYear(), toBeAdded.date.getMonth() + 1, 0)
      }
    }, (err, expenses) => {
      if (err) {
        return res.status(500).json({ message: `${ err.message } - unable to add expense` });
      }

      if (expenses.length > 0) {
        return res.status(400).json({ message: 'An expense with the informed description for the informed month already exists' });
      }

      toBeAdded.save(err => {
        if (err) {
          return res.status(500).json({ message: `${ err.message } - unable to add expense` });
        }

        const { _id, description, amount, date } = toBeAdded;

        return res.status(201).json({ message: 'Expense registered successfully', expense: { id: _id, description, amount: amount.toString(), date } });
      });
    });
  }

  static update(req, res) {
    const id = req.params.id;
    let toBeUpdated = new Expense(req.body);
    toBeUpdated._id = id;

    if (!/\d+\.\d{2}/i.test(toBeUpdated.amount.toString())) {
      return res.status(400).json({ message: 'Invalid amount format' });
    }

    Expense.find({
      _id: { $ne: toBeUpdated._id },
      description: toBeUpdated.description,
      date: {
        $gte: new Date(toBeUpdated.date.getFullYear(), toBeUpdated.date.getMonth(), 1),
        $lte: new Date(toBeUpdated.date.getFullYear(), toBeUpdated.date.getMonth() + 1, 0)
      }
    }, (err, expenses) => {
      if (err) {
        return res.status(500).json({ message: `${ err.message } - unable to update expense` });
      }

      if (expenses.length > 0) {
        return res.status(400).json({ message: 'An expense with the informed description for the informed month already exists' });
      }

      Expense.findByIdAndUpdate(id, { $set: toBeUpdated }, err => {
        if (err) {
          return res.status(500).json({ message: `${ err.message } - unable to add expense` });
        }

        const { _id, description, amount, date } = toBeUpdated;

        return res.status(201).json({ message: 'Expense updated successfully', expense: { id: _id, description, amount: amount.toString(), date } });
      });
    });
  }

  static get(req, res) {
    const id = req.params.id;

    Expense.findById(id, (err, { id, description, amount, date }) => {
      if (err) {
        return res.status(500).json({ message: `${ err.message } - unable to fetch expense` });
      }

      return res.status(200).json({ message: `query successful`, expense: { id, description, amount: amount.toString(), date } });
    });
  }

  static remove(req, res) {
    const id = req.params.id;

    Expense.findByIdAndDelete(id, err => {
      if (err) {
        return res.status(500).json({ message: `${ err.message } - unable to delete expense` });
      }

      return res.status(204).send();
    })

  }
}
