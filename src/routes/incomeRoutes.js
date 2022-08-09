import express from 'express';
import IncomeController from '../controller/IncomeController.js';

const router = express.Router();

router.get('/income', IncomeController.list);
router.get('/income/:id', IncomeController.get);
router.post('/income', IncomeController.add);


export default router;
