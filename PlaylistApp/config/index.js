const dotenv = require("dotenv")

dotenv.config() // Cargar el arhivo .env a las variables de entorno del SO

const config = {
    port: process.env.PORT, //Leer variable de entorno del SO
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName:process.env.DB_NAME
}


module.exports = config