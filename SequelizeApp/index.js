const db = require("./models")

db.User.findAll()
.then(result=>{
    console.log(result)
})
.catch(error=>{
    console.log(error)
})

db.User.findOne({
    where:{
        email:"mail@tzuzulcode.com"
    }
}).then(result=>{
    console.log(result)
})
.catch(error=>{
    console.log(error)
})