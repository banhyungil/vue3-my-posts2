const mysql = require("mysql2/promise") 
// const PORT = 3306
// const HOST = "localhost"
// const USER = 'root'
// const PASSWORD = 'root'
// const DATABASE = 'mypost'

// const PORT = 3306
// const HOST = 'mysql'
// const HOST = 'localhost'
// const USER = 'root'
// const PASSWORD = 'root'
// const DATABASE = 'post'

// local 설정 : 
// * command : . /c/Projects/vue3-my-posts2/backend/env.sh
const {
    MYSQL_HOST:HOST,
    MYSQL_USER:USER,
    MYSQL_PORT:PORT,
    MYSQL_ROOT_PASSWORD:PASSWORD,
    MYSQL_DATABASE:DATABASE
} = process.env

console.log(HOST, USER, PORT, PASSWORD, DATABASE);

exports.connection = mysql.createPool({
    host: HOST,
    port: PORT,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})
