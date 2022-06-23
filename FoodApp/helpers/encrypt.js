const bcrypt = require("bcrypt")

async function encrypt(string) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(string,salt)

    return hash
}

module.exports = {
    encrypt
}