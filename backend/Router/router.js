const express = require('express');
const router = express.Router();
const { expenseGet, expensePost, expenseDelete, expenseUpdateData, expenseDeleteAll, expenseById } = require('../Controllers/controller')

router.get('/api/expenses', expenseGet);

router.get('/api/expense/:id', expenseById);

router.post('/api/expenses', expensePost);

router.delete('/api/expenses/:id', expenseDelete);

router.put('/api/expenses/:id', expenseUpdateData);

router.delete('/api/expensesall', expenseDeleteAll);


module.exports = router;