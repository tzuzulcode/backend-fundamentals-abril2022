//Usando modulos nátivos:
const path = require("path") // path: nos permite admistrar rutas de archivos

//Usando modules externos
const express = require("express")
const port = 4000

//Importando router
const users = require("./routes/users") // También podemos usar: require("./routes/users.js")

const app = express()


//Sección para los middleware
app.use("/static",express.static(path.join(__dirname,"static"))) //Middleware para archivos estaticos


// Sección de codigo para los router
app.use(users) // Usando un router


// req: request(peticion) y res: response(respuesta)
app.get("/",function(req,res){
    console.log(__dirname) // Ubicación o ruta de nuestro proyecto
    return res.sendFile(path.join(__dirname,"views","index.html"))
})

app.listen(port,()=>{
    console.log("Escuchando en: http://localhost:"+port)
})