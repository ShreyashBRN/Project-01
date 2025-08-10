const express = require('express');
const userController = require('../controllers/userController.js');
const router = express.Router();


//For employees
router.get('/api/employees', userController.getAllEmployees);
router.get('/api/employees/:id', userController.getEmployeeById);
router.post('/api/employees', userController.createEmployee);
router.put('/api/employees/:id', userController.updateEmployee);
router.delete('/api/employees/:id', userController.deleteEmployee);

// For customers
router.get('/api/customers', userController.getAllCustomers);
router.get('/api/customers/:id', userController.getCustomerById);
router.post('/api/customers', userController.createCustomer);
router.put('/api/customers/:id', userController.updateCustomer);
router.delete('/api/customers/:id', userController.deleteCustomer);

module.exports = router;