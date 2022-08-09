import Income from '../model/Income.js';

export default class IncomeController {
  static list(req, res) {
    Income.find((err, incomes) => {
      if (err) {
        return res.status(500).json({ message: `${ err.message } - unable to fetch income data` });
      }

      return res.status(200).json({ message: `query successful`, incomes });
    });
  }

  static add(req, res) {
    let toBeAdded = new Income(req.body);

    Income.find({
      description: toBeAdded.description,
      date: {
        $gte: new Date(toBeAdded.date.getFullYear(), toBeAdded.date.getMonth(), 1),
        $lte: new Date(toBeAdded.date.getFullYear(), toBeAdded.date.getMonth() + 1, 0)
      }
    }, (err, incomes) => {
      if (err) {
        return res.status(500).json({ message: `${ err.message } - unable to add income` });
      }

      if (incomes.length > 0) {
        return res.status(400).json({ message: 'An income with the informed description for the informed month already exists' });
      }

      toBeAdded.save(err => {
        if (err) {
          return res.status(500).json({ message: `${ err.message } - unable to add income` });
        }
        return res.status(201).json({ message: 'Income registered successfully', income: toBeAdded });
      });
    });
  }
}
