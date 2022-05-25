const express = require("express")
// PORT
const { port } = require("./config")


const app = express()

app.get("/",function(req,res){
    return res.json({
        hola:"mundo"
    })
})

app.listen(port,function(){
    console.log("Listening on: http://localhost:"+port)
})