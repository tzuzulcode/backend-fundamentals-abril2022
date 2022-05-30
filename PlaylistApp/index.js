const express = require("express")
const path = require("path")
// PORT
const { port } = require("./config")


// Routes
const auth = require("./routes/auth")


const app = express()

// Usando middlewares
app.use(express.static(path.join(__dirname,"static")))

// Configurando template engine
app.set("view engine","pug")
app.set("views","views")


app.use(auth)

app.get("/",function(req,res){
    return res.json({
        hola:"mundo"
    })
})

app.listen(port,function(){
    console.log("Listening on: http://localhost:"+port)
})