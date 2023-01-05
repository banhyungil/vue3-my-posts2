const express = require('express');
const app = express();

const router = require("./routes")
app.use("/", router)
const server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
})

// 웹서버의 기능은 무엇인가?
// request와 response를 처리하는 기능이 있다.
// response시에는 DB와의 연동과 서버에 존재하는 resource를 반환한다.
// 문제
// front end에서 지정한 router와 어떻게 요청을 구분하나?
// 요청이들어오면 response를 하는데 사실 해당 url은 서버로 요청할 필요없이 front end에서 처리하는 부분이다.
// fronend router에 등록된 path는 server 쪽으로 요청이 되면 안된다.