require("dotenv").config()
const Express = require("express")
const app = Express()
const cors = require("express")
const PORT = process.env.PORT || 5000;
const routes = require("./controllers/routes")
const fs = require("fs")

app.use(cors())
app.use(Express.json())
// app.use(fs())
app.use(routes)


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/api/blog.json")
})



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

