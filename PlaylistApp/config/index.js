const dotenv = require("dotenv")

dotenv.config() // Cargar el arhivo .env a las variables de entorno del SO

const config = {
    port: process.env.PORT //Leer variable de entorno del SO
}


module.exports = config