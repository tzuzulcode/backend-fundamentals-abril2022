const { parseDate } = require("../helpers/date")
const client = require("../libs/db")

class UsersController{
    static async getAll(req,res){
        // if(!req.session.user.loggedIn){
        //     return res.redirect("/")
        // }
        const users = await client.user.findMany()
        const error = (await req.consumeFlash('error'))[0];
        const success = (await req.consumeFlash('success'))[0];

        // const users = ["Juanito","Miguel","María","Emilio"]

        return res.render("users",{
            users,
            error,
            success
        })
    }

    static async getOne(req,res){
        const id = req.params.id
        const user = await client.user.findUnique({
            where:{
                id:parseInt(id)
            }
        })

        user.birthday = parseDate(user.birthday)

        return res.render("user_details",{
            user
        })
    }

    static async updateOne(req,res){
        const id = req.params.id
        req.body.active = req.body.active==="on"
    
        const date = new Date(req.body.birthday)
        date.setDate(date.getDate()+1)
        req.body.birthday = date

        try {
            const user = await client.user.update({
                data:req.body,
                where:{
                    id:parseInt(id)
                }
            })
            await req.flash('success', 'User updated successfully');
            return res.redirect("/users")
        } catch (error) {
            console.log(error)
            // EN las redirecciones no podemos añadir datos extra
            await req.flash('error', 'Failed to update user');
            return res.redirect("/users")
        }
    }

    static async deleteOne(req,res){
        const id = req.params.id
        try {
            const user = await client.user.delete({
                where:{
                    id:parseInt(id)
                }
            })
            await req.flash('success', 'User deleted successfully');
        } catch (error) {
            console.log(error)
            await req.flash('error', 'Failed to delete user');
        }finally{
            return res.redirect("/users")
        }
    }
}

module.exports = UsersController