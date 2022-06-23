require("dotenv").config()

const config = {
    port:process.env.PORT,
    sessionSecret:process.env.SESSION_SECRET
}


module.exports = config