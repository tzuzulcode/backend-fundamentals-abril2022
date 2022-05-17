const database = require("../libs/database")
const bcrypt = require("bcrypt")

class User{
    constructor(data){
        this.name = data.name
        this.email = data.email
        this.username = data.username
        this.birthday = data.birthday
        this.password = data.password
        this.data = data
    }

    validate(){
        if(!(this.email && this.name && this.birthday && this.username && this.password)){
            return {
                message:"Debes completar todos los campos",
                validated:false
            }
        }
        if(this.username.length<3){
            return {
                message:"Username debe tener mas de 3 caracteres",
                validated:false
            }
        }

        return {
            validated:true
        }
    }

    async save(){
        const data = {
            name:this.name,
            email:this.email,
            password: await this.encrypt(this.password),
            username:this.username,
            birthday:this.birthday
        }
        try {
            const result = await database.query(
                "INSERT INTO users(??) VALUES(?)",
                [Object.keys(data),Object.values(data)]
            )

            return result

        }catch(error){
            return error
        }
    }


    async encrypt(string){
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(string,salt)

        return hash
    }
}

module.exports = User