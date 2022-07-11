require("dotenv").config()

const config = {
    port:process.env.PORT,
    sessionSecret:process.env.SESSION_SECRET,
    emailPort:process.env.EMAIL_PORT,
    emailHost:process.env.EMAIL_HOST,
    emailPassword:process.env.EMAIL_PASSWORD,
    emailUsername:process.env.EMAIL_USERNAME
}


module.exports = config