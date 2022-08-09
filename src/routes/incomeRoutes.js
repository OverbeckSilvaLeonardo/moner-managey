import express from 'express';
import IncomeController from '../controller/IncomeController.js';

const router = express.Router();

router.get('/income', IncomeController.list);
router.get('/income/:id', IncomeController.get);
router.post('/income', IncomeController.add);
router.put('/income/:id', IncomeController.update);
router.delete('/income/:id', IncomeController.remove);


export default router;
