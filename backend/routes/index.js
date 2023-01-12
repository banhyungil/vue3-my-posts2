const path = require("path")
const express = require('express');
const router = express.Router();

const mysql = require("mysql")
const connnection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "mypost"
})

connnection.connect();

const sql = "SELECT id, title, content, date, author  FROM post"
connnection.query(sql)

/*
	'/' url로 접근했을 경우,
	결과값으로 public에 있는 index.html을 반환함을 의미
	여기서 index.html은 아까 위에서 우리가 배포가능한 형태로 바꾼 Vue!
*/
router.get('/', function(req, res) {
    const sPath = path.join(__dirname, '../public/index.html')
    res.sendFile(sPath);
})

/** test*/
router.post("/test", (req, res) => {
    console.log('req.params', req.params);
    console.log('req.body', req.body);
    console.log('req.query', req.query);
})

const postRouter = require("./post")
router.use("/posts", postRouter)


module.exports = router