const { query } = require("../libs/database");

class Song{
    static async getAll(){
        return await query("SELECT * FROM songs")
    }

    static async create(data){
        return await query("INSERT INTO songs(??) VALUES(?)",[Object.keys(data),Object.values(data)])
    }
}

module.exports = Song