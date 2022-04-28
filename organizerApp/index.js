//Usando modulos nátivos:
const path = require("path") // path: nos permite admistrar rutas de archivos

//Usando modules externos
const express = require("express")
const port = 4000

const app = express()


// req: request(peticion) y res: response(respuesta)
app.get("/",function(req,res){
    console.log(__dirname) // Ubicación o ruta de nuestro proyecto
    return res.sendFile(path.join(__dirname,"static","index.html"))
})

app.listen(port,()=>{
    console.log("Escuchando en: http://localhost:"+port)
})