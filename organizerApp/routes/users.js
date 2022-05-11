const express = require("express")
const database = require("../libs/database")

const router = express.Router()


router.get("/users",function(req,res){
    database.connection.query("SELECT * FROM user",function(error,result,fields){
        if(error!=null){

            res.json({
                message:error.sqlMessage
            })
        }
        
        res.json(result)
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