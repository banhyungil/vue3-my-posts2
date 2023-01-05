const path = require("path")
const express = require('express');
const router = express.Router();

/*
	'/' url로 접근했을 경우,
	결과값으로 public에 있는 index.html을 반환함을 의미
	여기서 index.html은 아까 위에서 우리가 배포가능한 형태로 바꾼 Vue!
*/
router.get('/', function(req, res) {
    console.log("__dirname,", __dirname)
    const sPath = path.join(__dirname, '../public/index.html')
    console.log('sPath', sPath);
    res.sendFile(sPath);
})

module.exports = router