const express = require('express');
const router = express.Router();
const {getTransaction,addTransaction,deleteTransaction} = require('../../../controllers/transaction');

router.get('/',getTransaction);
router.post('/',addTransaction);
router.delete('/:id',deleteTransaction);

module.exports = router;
