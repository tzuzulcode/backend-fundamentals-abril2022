const client = require("../libs/db")
const {encrypt} = require("../helpers/encrypt")

class AuthController{

    static async getSignUpForm(req,res){
        return res.render("signup")
    }


    // Realizar validaciones
    static async signup(req,res){
        const {name,email,password,birthday} = req.body
        // SELECT id,name,email FROM users
        try {
            const user = await client.user.create({
                select:{
                    id:true,
                    name:true,
                    email:true
                },
                data:{
                    name,
                    email,
                    birthday: new Date(birthday),
                    password: await encrypt(password)
                }
            })
            console.log(user)

            req.session.user = {
                loggedIn:true,
                ...user //spread operator
            }
            return res.redirect("/")
        } catch (error) {
            console.log(error)
            return res.render("signup")
        }
    }
}

module.exports = AuthController