(async () => {
    const {selectAll, select, insert} = require("./db/post")
    // const [rows] = await connection.query("select * from post")
    const post = {title: "제목생성", content: "내용생성", author: "ban"}
    await insert(post)
    const [rows] = await selectAll()
    console.log('rows', rows);
})()


