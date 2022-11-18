// require("dotenv").config();
require("express-async-errors");

const express = require('express');
const routes = require('./routes/customer.routes');
const sqlserverClient = require("../src/database/sqlserver");

const server = express();
server.use(express.json());
server.use("/api/v1/customers", routes);


const port = 3001;

const start = async () => {
    try {

        await sqlserverClient.connect();

        server.listen(port, () => {
            console.log("Server running on port :  ", port)
        })

    } catch (error) {
        console.error(error)
    } finally {
        sqlserverClient.disconnect()
    }
}

start(sqlserverClient)