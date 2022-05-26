const express = require("express")
// PORT
const { port } = require("./config")


// Routes
const auth = require("./routes/auth")


const app = express()

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