
const CustomerRepository = require("../repositories/CustomerRepository")

class CustomerService {

    async listCustomers() {
        const customerRepository = new CustomerRepository();

        const customers = await customerRepository.listCustomers();

        return customers;
    }

    async getCustomerById({ customer_id }) {
        const customerRepository = new CustomerRepository();

        const customer = await customerRepository.getCustomer({ customer_id });

        return customer;
    }

    async deleteCustomerById({ customer_id }) {
        const customerRepository = new CustomerRepository();

        const customer = await customerRepository.deleteCustomer({ customer_id });

        return customer;
    }


    async createCustomer({ customer_id, name, cpf }) {
        const customerRepository = new CustomerRepository();

        const customer = await customerRepository.createCustomer({ customer_id, name, cpf });

        return customer;
    }

    async updateCustomer({ customer_id, name, cpf }) {
        const customerRepository = new CustomerRepository();

        const customer = await customerRepository.updateCustomer({ customer_id, name, cpf });

        return customer;
    }
}

module.exports = CustomerService;