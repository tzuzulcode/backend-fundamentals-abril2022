const bcrypt = require("bcrypt")
const User = require("../models/User")
const {query} = require("../libs/database")
// const userModel = new User()


// class Persona{

//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }

//     init(name,age){
//         this.name = name
//         this.age = age
//     }
        // saludar(){
        //     console.log("Hola mundo")
        // }
// }

// function Persona(name,age){ //Funcion constructora
//     this.name = name
//     this.age = age
// }

// Persona.prototype.init = function(name,age){

// }
// Persona.prototype.saludar = function(){
//     console.log("Hola mundo")
// }

// const tzuzul = new Persona("Tzuzul",24)
// tzuzul.saludar()



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
                    // req.session.loggedIn = true
                    // req.session.name = user.name
                    // req.session.email = user.email
                    // req.session.idUser = user.id

                    req.session.user = {
                        loggedIn : true,
                        name : user.name,
                        email : user.email,
                        idUser : user.id,
                    }

                    // res.setHeader("Set-Cookie","id:abc123")
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
        return res.render("login")
    }

    static getSignUpForm(req,res){
        return res.render("signup")
    }

    async signUp(req,res){
        
        const data = {
            name:req.body.name,
            email:req.body.email,
            password: await this.encrypt(req.body.password),
            birthday:req.body.birthday
        }
        try {
            const result = await query(
                "INSERT INTO users(??) VALUES(?)",
                [Object.keys(data),Object.values(data)]
            )

            console.log(result)

            req.session.user = {
                loggedIn : true,
                name : data.name,
                email : data.email,
                idUser : result.insertId,
            }
                

            return res.redirect("/")

        }catch(error){
            console.log(error)
            return res.render("signup",{
                error:"Verifica los datos",
                user:{
                    name:req.body.name,
                    email:req.body.email,
                    password: req.body.password,
                    birthday:req.body.birthday
                }
            })
        }
    }

    static logout(req,res){
        req.session.destroy()
        return res.redirect("/")
    }

    async encrypt(string){
        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(string,salt)

        return password
    }
}


module.exports = AuthController