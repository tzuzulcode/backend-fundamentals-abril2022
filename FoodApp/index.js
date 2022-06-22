const express = require("express")
const { port } = require("./config")
const path = require("path")
const expressLayouts = require("express-ejs-layouts")

// Routes
const users = require("./routes/users")

const app = express()

app.set("view engine","ejs")
app.set("layout","./layouts/base")

// Middleware
app.use(express.static(path.join(__dirname,"static")))
app.use(expressLayouts)

app.use(users)

app.get("/",(req,res)=>{
    return res.json({
        hola:"Mundo"
    })
})

app.listen(port,()=>{
    console.log("Listening on: http://localhost:"+port)
})