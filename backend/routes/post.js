const express = require("express")
const postRouter = express.Router()
const post = require("../db/post")


postRouter.get("/", (req, res) => {
    post.selectAll().then((result) => {
        const [rows, fileds] = result
        res.send(rows)
    })
})

postRouter.get("/:id", (req, res) => {
    post.select(req.params.id).then((result) => {
        const [rows, fileds] = result
        res.send(rows)
    })
})

postRouter.post("/", (req, res) => {
    console.log('req.params', req.params);
    post.insert(req.params)
})

postRouter.delete("/:id", (req, res) => {
    const post = req.params
})

module.exports = postRouter