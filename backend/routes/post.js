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
        res.send(rows[0])
    })
})

postRouter.put("/", (req, res) => {
    post.update(req.body)
    res.send()
})

postRouter.post("/", (req, res) => {
    console.log('insert req.body', req.body);
    post.insert(req.body)
    res.send()
})

postRouter.delete("/:id", (req, res) => {
    post.delete(req.params.id)
    res.send()
})

module.exports = postRouter