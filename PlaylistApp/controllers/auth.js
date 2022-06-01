class AuthController{

    // static: Nos permite usar atributos y métodos de la clase sin crear una instancia (objeto)
    static login(req,res){
        console.log(req.body)
        // console.log(req.headers["content-type"])
        return res.redirect("/")
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