const express = require('express');
const router = express.Router();
const { exportInventoryCSV } = require('../controllers/exportController.js');

router.get("/inventory/csv", exportInventoryCSV);




module.exports = router;