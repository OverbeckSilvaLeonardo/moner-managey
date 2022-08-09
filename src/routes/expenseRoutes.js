import express from 'express';
import ExpenseController from '../controller/ExpenseController.js';

const router = express.Router();

router.get('/expense', ExpenseController.list);
router.get('/expense/:id', ExpenseController.get);
router.post('/expense', ExpenseController.add);
router.put('/expense/:id', ExpenseController.update);
router.delete('/expense/:id', ExpenseController.remove);


export default router;
