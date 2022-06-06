const express = require("express")
const session = require("express-session")
const path = require("path")
const addSessionToTemplate = require("./middleware/addSessionToTempalte")


// PORT
const { port, sessionSecret } = require("./config")


// Routes
const auth = require("./routes/auth")


const app = express()

// Usando middlewares
app.use(express.static(path.join(__dirname,"static")))
app.use(express.urlencoded({
    extended:true
}))

app.use(session({
    secret:sessionSecret,
    resave:false,
    saveUninitialized:false
}))

app.use(addSessionToTemplate())



// Configurando template engine
app.set("view engine","pug")
app.set("views","views")

app.use(auth)

app.get("/",function(req,res){
    console.log(req.session)
    return res.render("home")
})

app.listen(port,function(){
    console.log("Listening on: http://localhost:"+port)
})