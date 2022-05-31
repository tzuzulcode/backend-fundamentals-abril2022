const express = require("express")

const router = express.Router()

router.get("/login",(req,res)=>{
    return res.render("login",{
        username:"Tzuzul",
        lista:["María","Miguel","Emilio"],
        id:123
    })
})


module.exports = router