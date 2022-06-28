const client = require("../libs/db")

class UsersController{
    static async getAll(req,res){
        // if(!req.session.user.loggedIn){
        //     return res.redirect("/")
        // }
        const users = await client.user.findMany()
        console.log(users)
        // const users = ["Juanito","Miguel","María","Emilio"]

        return res.render("users",{
            users,
            name:"Tzuzul"
        })
    }

    static async getOne(req,res){
        const id = req.params.id
        const user = await client.user.findUnique({
            where:{
                id:parseInt(id)
            }
        })

        console.log(user)

        return res.render("user_details",{
            user
        })
    }

    static async updateOne(req,res){
        const id = req.params.id
        try {
            const user = await client.user.update({
                data:req.body,
                where:{
                    id:parseInt(id)
                }
            })
            console.log(user)
            return res.render("users",{
                user,
                success:true,
                message:"User updated successfully"
            })
        } catch (error) {
            return res.render("users",{
                error:true,
                message:"User updated successfully"
            })
        }
    }
}

module.exports = UsersController