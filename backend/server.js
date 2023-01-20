const express = require('express');
const app = express();

const router = require("./routes")

const cors = require('cors');
app.use(cors({ origin: 'http://127.0.0.1:5173'}))
app.use(express.static(__dirname + "/public"));
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

app.use("/", router)

const server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
})





