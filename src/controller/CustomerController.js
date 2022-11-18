
const CustomerService = require("../services/CustomerService");

const listCustomers = async (req, res) => {
    try {

        const customerService = new CustomerService();
        const customers = await customerService.listCustomers();

        res.status(200).json({
            customers
        })

    } catch (error) {
        res.status(400).json({ message: "Error on listing  customers", error: error.message })
    }
}

const getCustomerById = async (req, res) => {
    try {

        const { customer_id } = req.params

        const customerService = new CustomerService();
        const customer = await customerService.getCustomerById({ customer_id });

        res.status(200).json({
            customer
        })

    } catch (error) {
        res.status(400).json({ message: "Error on retrieving customer", error: error.message })
    }
}

const deleteCustomerById = async (req, res) => {
    try {

        const { customer_id } = req.params

        const customerService = new CustomerService();
        const customer = await customerService.deleteCustomerById({ customer_id });

        res.status(200).json({
            customer
        })

    } catch (error) {
        res.status(400).json({ message: "Error on deleting customer", error: error.message })
    }
}



const createCustomer = async (req, res) => {
    try {

        const { customer_id, name, cpf } = req.body

        const customerService = new CustomerService();
        const customer = await customerService.createCustomer({ customer_id, name, cpf });

        res.status(200).json({
            customer
        })

    } catch (error) {
        res.status(400).json({ message: "Error on creating customer", error: error.message })
    }
}

const updateCustomer = async (req, res) => {
    try {

        const { name, cpf } = req.body;
        const { customer_id } = req.params;

        const customerService = new CustomerService();
        const customer = await customerService.updateCustomer({ customer_id, name, cpf });

        res.status(200).json({
            customer
        })

    } catch (error) {
        res.status(400).json({ message: "Error on updating customer", error: error.message })
    }
}


module.exports = { getCustomerById, listCustomers, deleteCustomerById, createCustomer, updateCustomer }