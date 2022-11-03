const { application } = require("Express")

const router = require("Express").Router()


router.get("/", (req, res) => {
    res.sendFile(__dirname + "/api/blog.json/${post-id}")
    let id =req.params.id
    let result = db.filter(i => i.id === id)
    res.status(200).json(result)
})


router.post("/", (req, res) => {
res.status(200).json(result)
})

router.put("/", (req, res) =>{
    filePath = ${__dirname}
    filePath = filePath.replace('controllers','')
    console.log(filePath)
    fs.readFile(${filePath}/api/blog.json,(err,data)=>{
        console.log(data.toString())
        }
)}
)


router.delete("/", (req, res) => {
    res.status(200).json(result)

})



module.exports = router