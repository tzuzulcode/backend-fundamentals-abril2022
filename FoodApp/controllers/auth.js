const client = require("../libs/db")
const {encrypt,compare} = require("../helpers/encrypt")

class AuthController{

    static getSignUpForm(req,res){
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

    static getLoginForm(req,res){
        return res.render("login")
    }

    static async login(req,res){
        const {email,password} = req.body //Destructuring
        const user = await client.user.findUnique({ 
            where:{
                email:email
            }
        })

        console.log(user)

        if(user && await compare(password,user.password)){
            delete user.password
            req.session.user = {
                loggedIn:true,
                ...user //spread operator
            }
            return res.redirect("/")
        }

        return res.render("login",{
            error:true,
            message:"Invalid credentials"
        })
    }
}

module.exports = AuthController