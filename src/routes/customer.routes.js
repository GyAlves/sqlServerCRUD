const express = require('express');

const customerRouter = express.Router();

const { listCustomers, getCustomerById, deleteCustomerById, createCustomer, updateCustomer } = require("../controller/CustomerController");

customerRouter.route("/").get(listCustomers);
customerRouter.route("/").post(createCustomer);
customerRouter.route("/customer/:customer_id").get(getCustomerById);
customerRouter.route("/customer/:customer_id").delete(deleteCustomerById);
customerRouter.route("/customer/:customer_id").patch(updateCustomer);



module.exports = customerRouter