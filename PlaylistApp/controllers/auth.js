const bcrypt = require("bcrypt")
const User = require("../models/User")
// const userModel = new User()

class AuthController{

    // static: Nos permite usar atributos y métodos de la clase sin crear una instancia (objeto)
    static async login(req,res){
        // const email = req.body.email
        // const password = req.body.password
        
        const {email,password} = req.body

        const {success,user} = await User.getByEmail(email)
        if(success && user){
            try {
                if(await bcrypt.compare(password,user.password)){
                    return res.redirect("/")
                }
            } catch (error) {
                console.log(error)
            }
        }
        // console.log(req.headers["content-type"])
        return res.render("login",{
            error:"Incorrect credentials",
            user:{
                email,
                password
            }
        })
    }

    static getLoginForm(req,res){
        return res.render("login",{
            username:"Tzuzul",
            lista:["María","Miguel","Emilio"],
            id:123,
            // hiddenNavbar:true
        })
    }
}


module.exports = AuthController