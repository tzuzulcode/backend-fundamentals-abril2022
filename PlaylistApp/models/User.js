// Destructuring
const {query} = require("../libs/database")


class User{
    static async getByEmail(email){
        const user = await query("SELECT * FROM users WHERE email=?",[email])
        if(user.success){
            return {
                success:true,
                user:user.result[0]
            }
        }

        return user
    }
}

module.exports = User