
const express = require('express');
const router = express.Router();
const transferService = require('../service/transferService');
const transferModel = require('../model/transferModel');

router.post('/', transferService.transfer);

// Endpoint para consultar histórico de transferências
router.get('/', (req, res) => {
	res.json(transferModel.getAllTransfers());
});

module.exports = router;
