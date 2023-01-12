const {connection} = require("./index.js")

exports.selectAll =  function selectAll() {
    const sql = "SELECT id, title, content, date, author  FROM post"

    return connection.query(sql)
}

exports.select = function select(id) {
    const sql = `SELECT id, title, content, date, author  FROM post WHERE id = ?`

    return connection.query(sql, id)
}

exports.insert = function insert(post) {
    const sql = `insert into post(id, title, content, date, author) values(null, ?, ?, date_format(sysdate(), "%Y%m%d"), ?);`

    return connection.query(sql, [post.title, post.content, post.author])
}

exports.update = function update(post) {
    const sql = `update post set title = ?, content = ?, date = date_format(sysdate(), "%Y%m%d") where id=?`;

    return connection.query(sql, [post.title, post.content, post.id])
}

exports.delete = function remove(id) {
    const sql = `delete from post where id=?`;

    return connection.query(sql, id)
}