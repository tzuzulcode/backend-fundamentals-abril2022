const express = require("express")
const { port, sessionSecret } = require("./config")
const path = require("path")
const expressLayouts = require("express-ejs-layouts")
const session = require("express-session")

// Routes
const users = require("./routes/users")
const auth = require("./routes/auth")

const app = express()

app.set("view engine","ejs")
app.set("layout","./layouts/base")

// Middleware
app.use(express.static(path.join(__dirname,"static")))
app.use(express.urlencoded({
    extended:true
}))
app.use(session({
    secret: sessionSecret,
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:3600000
    }
}))
app.use(expressLayouts)

app.use(users)
app.use(auth)

app.get("/",(req,res)=>{
    console.log(req.session)
    return res.json({
        hola:"Mundo"
    })
})

app.listen(port,()=>{
    console.log("Listening on: http://localhost:"+port)
})