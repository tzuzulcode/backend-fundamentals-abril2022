const express = require("express")
const { port, sessionSecret } = require("./config")
const path = require("path")
const expressLayouts = require("express-ejs-layouts")
const session = require("express-session")
const { flash } = require('express-flash-message');

// Routes
const users = require("./routes/users")
const auth = require("./routes/auth")
const food = require("./routes/food")
const orders = require("./routes/orders")


const addSessionToTemplate = require("./middleware/addSessionToTempalte")

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

app.use(flash({ sessionKeyName: 'flashMessage' }));
app.use(expressLayouts)
app.use(addSessionToTemplate())

app.use("/admin/users",users)
app.use("/auth",auth)
app.use("/food",food)
app.use("/orders",orders)

app.get("/",(req,res)=>{
    console.log(req.session)
    return res.render("home")
})

app.get("/not_allowed",(req,res)=>{
    return res.render("not_allowed")
})

// Pagina 404
app.get("*",(req,res)=>{
    return res.render("not_found")
})

app.listen(port,()=>{
    console.log("Listening on: http://localhost:"+port)
})