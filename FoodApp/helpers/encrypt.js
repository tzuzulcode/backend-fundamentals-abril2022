const bcrypt = require("bcrypt")

async function encrypt(string) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(string,salt)

    return hash
}

async function compare(string,hash){
    try {
        return await bcrypt.compare(string,hash)
    } catch (error) {
        return false
    }
}

module.exports = {
    encrypt,
    compare
}