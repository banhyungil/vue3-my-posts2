const mysql = require("mysql2/promise") 
exports.connection = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "mypost",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})
