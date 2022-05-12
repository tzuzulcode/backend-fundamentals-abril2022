const express = require("express")
const database = require("../libs/database")

const router = express.Router()


router.get("/users",async function(req,res){
    const data = await database.query("SELECT * FROM users")
    
    return res.json(data)
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