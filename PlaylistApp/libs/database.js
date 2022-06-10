const mysql = require("mysql2")
const { dbHost, dbPort, dbUser, dbPassword, dbName } = require("../config")

const connection = mysql.createConnection({
    host: dbHost, // 'localhost'
    port: dbPort,
    user: dbUser,
    password: dbPassword,
    database: dbName
}) //function

async function query(sql,data){
    try {
        const result = await queryPromise(sql,data)
        return {
            success:true,
            result
        }
    } catch (error) {
        return {
            success:false,
            message:error.message
        }
    }
}

function queryPromise(sql,data){
    return new Promise(function (resolve,reject){
        connection.query(sql,data,function(error,result,fields){
            if(error!=null){
                console.log(error)
    
                return reject({
                    error:true,
                    message:error.sqlMessage
                })
            }else{
                return resolve(result)
            }
        })
    })
}

module.exports = {
    connection,
    query
}