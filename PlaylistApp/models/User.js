// Destructuring
const {query} = require("../libs/database")


class User{
    static async getByEmail(email){
        try {
            const user = await query("SELECT * FROM users WHERE email=?",[email])
            return {
                success:true,
                user:user[0]
            }
        } catch (error) {
            console.log(error)
            return {
                success:false,
                message:"An error ocurred"
            }
        }
    }
}

module.exports = User