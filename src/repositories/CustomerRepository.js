
const sqlserverConnection = require("../database/sqlserver");

class CustomerRepository {
    constructor() {
        this._mssqlserverConnection = sqlserverConnection;
    }


    async listCustomers() {

        const customers = (await this._mssqlserverConnection.connect()).request().query("SELECT * FROM clients");

        return customers;
    }

    async getCustomer({ customer_id }) {

        const customer = (await this._mssqlserverConnection.connect()).request().query(`SELECT * FROM clients WHERE ID=${customer_id}`);

        return customer;
    }


    async deleteCustomer({ customer_id }) {

        const customer = (await this._mssqlserverConnection.connect()).request().query(`DELETE clients WHERE ID=${customer_id}`);

        return customer;
    }


    async createCustomer({ customer_id, name, cpf }) {

        const customer = (await this._mssqlserverConnection.connect()).request()
            .query(`INSERT INTO clients(ID, NAME, CPF) VALUES(${customer_id}, '${name}', '${cpf}')`);

        return customer;
    }

    async updateCustomer({ customer_id, name, cpf }) {

        const customer = (await this._mssqlserverConnection.connect()).request()
            .query(`UPDATE clients SET NAME='${name}', CPF='${cpf}' WHERE ID=${customer_id}`);

        return customer;
    }



}

module.exports = CustomerRepository;
