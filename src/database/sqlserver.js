
const sql = require("mssql");

class SqlServerConnection {
    constructor() {
        this.options = {
            server: "localhost",
            database: "study",
            user: "sa",
            password: "mssql@4816",
            trustServerCertificate: true,
        }
    }

    async connect() {

        const conn = await sql.connect(this.options);
        console.log("Connected to mssql server!");

        return conn

    }

    async disconnect() {
        sql.close();
    }
}

module.exports = new SqlServerConnection();

