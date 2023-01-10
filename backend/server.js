const express = require('express');
const app = express();

const router = require("./routes")

// app.use("/", router)
app.use(express.static(__dirname + "/public"));
app.use(router)


const server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
})
