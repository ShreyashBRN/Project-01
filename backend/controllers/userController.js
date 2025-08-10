const express = require('express');

let employees = [
    {
        id: 1,
        name: "John Doe",
        employeeId: "EMP001",
        department: "IT",
        email: "john@example.com",
        phoneNo: "1234567890",
        salary: 50000,
        position: "Developer",
        joinedAt: "2024-05-01"
    },
    {
        id: 2,
        name: "Jane Smith",
        employeeId: "EMP002",
        department: "HR",
        email: "jane@example.com",
        phoneNo: "9876543210",
        salary: 40000,
        position: "HR Manager",
        joinedAt: "2023-10-15"
    }
];

// Array to store customers
let customers = [
    {
        id: 1,
        name: "Alice Johnson",
        phoneNo: "1112223333",
        email: "alice@example.com",
        orders: ["Order1", "Order2"]
    },
    {
        id: 2,
        name: "Bob Williams",
        phoneNo: "4445556666",
        email: "bob@example.com",
        orders: ["Order3"]
    }
];













exports.getAllEmployees = (req, res) => {
    res.status(200).json(employees);
}

exports.getEmployeeById = (req, res) => {
    const id = parseInt(req.params.id);
    const foundEmployee = employees.find(emp => emp.id === id);
    if(foundEmployee) {
        res.status(200).json({ message: "Employee found", employee: foundEmployee });
    }
    else{
        res.status(404).json({ message: "Employee not found" });
    }
}

exports.createEmployee = (req, res) => {
    const newEmployee = req.body;
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
}

exports.updateEmployee = (req, res) => {
    const id = parseInt(req.params.id);
    const newBody = req.body;
    const upindexemp = employees.findIndex(emp => emp.id === id);
    if(upindexemp !== -1){
        employees[upindexemp] ={ ...employees[upindexemp], ...newBody };
        res.status(200).json({ message: "Employee updated", employee: employees[upindexemp] });
    }
    else{
        res.status(404).json({ message: "Employee not found" });
    }
}

exports.deleteEmployee = (req, res) => {
}






exports.getAllCustomers = (req, res) => {
}
exports.getCustomerById = (req, res) => {
    const id = parseInt(req.params.id);
    const foundCustomer = customers.find(emp => emp.id === id);
    if(foundCustomer) {
        res.status(200).json({ message: "Customer found", employee: foundEmployee });
    }
    else{
        res.status(404).json({ message: "Customer not found" });
    }
}
exports.createCustomer = (req, res) => {
}
exports.updateCustomer = (req, res) => {
}
exports.deleteCustomer = (req, res) => {
}