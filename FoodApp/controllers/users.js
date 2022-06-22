const client = require("../libs/db")

class UsersController{
    static async getAll(req,res){
        const users = await client.user.findMany()
        console.log(users)
        // const users = ["Juanito","Miguel","María","Emilio"]

        return res.render("users",{
            users,
            name:"Tzuzul"
        })
    }
}

module.exports = UsersController