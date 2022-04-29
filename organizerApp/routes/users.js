const express = require("express")

const router = express.Router()


router.get("/users",function(req,res){
    res.json({
        ruta:"users"
    })
})
router.get("/login",function(req,res){
    res.json({
        ruta:"login"
    })
})
router.get("/registro",function(req,res){
    res.json({
        ruta:"registro"
    })
})


module.exports = router // Exportando