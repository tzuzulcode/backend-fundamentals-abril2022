const express = require("express")
const {engine} = require("express-handlebars")


const app = express()

app.engine('hbs',engine({
    extname:"hbs"
}))

app.set("view engine","hbs")
app.set("views","views")


app.get("/",(req,res)=>{
    return res.render("home")
})


app.listen(4000,()=>{
    console.log("Listening on http://localhost:4000")
})