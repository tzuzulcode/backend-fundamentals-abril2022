const mysql = require("mysql2")

const connection = mysql.createConnection({
    host:'127.0.0.1', // 'localhost'
    port: 3306,
    user: 'tzuzul',
    password: '12345',
    database: 'OrganizerApp'
}) //function

// function myCreateConnection(objeto){
//     //procesar objeto

//     return {
//         info:{
//             name:"Connection personalizada",
//             status:"success"
//         },
//         query:function(){
//             console.log("Realizando consulta...")
//         }
//     }
// }

module.exports = {
    connection
}
