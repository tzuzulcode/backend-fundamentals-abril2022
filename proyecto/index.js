const express = require("express")

const app = express()

app.use(express.text()) // Utilizando el middleware para conversion de datos: texto
app.use(express.json())// Utilizando el middleware para conversion de datos: json

// "/": Indica que estamos visitando el home, inicio o raiz.
app.get("/",function(peticion,respuesta){
    respuesta.send("Método GET")
})

// "/usuarios": Es la ruta que indica que estamos visitando la sección de usuarios.
// En teoría esta ruta se usa para crear un usuario
app.post("/usuarios",function(peticion,respuesta){
    const username = peticion.body // String
    respuesta.send("Método POST: "+username)
})

app.post("/datos-json",function(peticion,respuesta){
    const user = peticion.body
    respuesta.send("Hola: "+user.nombre)
})

app.put("/",function(peticion,respuesta){
    respuesta.send("Método PUT")
})

app.delete("/",function(peticion,respuesta){
    respuesta.send("Método DELETE")
})

// Investigar acerca de HTTP


app.listen(4000,()=>{
    console.log("Escuchando: http://localhost:4000")
})