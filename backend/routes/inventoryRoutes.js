const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController.js');

router.get('/api/inventory', inventoryController.getInventoryItems);
router.get('/api/inventory/:id', inventoryController.getInventoryItemById);
router.post('/api/inventory/', inventoryController.createInventoryItem);
router.put('/api/inventory/:id', inventoryController.updateInventoryItem);
router.delete('/api/inventory/:id', inventoryController.deleteInventoryItem);

module.exports = router;