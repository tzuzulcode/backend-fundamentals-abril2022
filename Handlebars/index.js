const express = require("express")
const {engine} = require("express-handlebars")
const {toBoolean} = require("./helpers/templateHelpers")

const app = express()

app.engine('hbs',engine({
    extname:"hbs",
    partialsDir:"views/components",
    // layoutsDir:"views/misLayouts",
    defaultLayout:"base",
    helpers:{
        toBoolean
    }
}))

app.set("view engine","hbs")
app.set("views","views")


app.get("/",(req,res)=>{

    return res.render("home",{
        // layout:false,
        user:{
            logged:1,
            name:"Tzuzul"
        },
        programmingLanguages:["JavaScript", "Python", "C++", "C#"]
    })
})


app.listen(4000,()=>{
    console.log("Listening on http://localhost:4000")
})