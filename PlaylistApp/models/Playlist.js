const { query } = require("../libs/database");

class Playlist{
    static async getMyPlaylists(idUser){
        return await query("SELECT * FROM playlists WHERE owner=?",[idUser])
    }

    static async create(data){
        return await query("INSERT INTO playlists(??) VALUES(?)",[Object.keys(data),Object.values(data)])
    }
}

module.exports = Playlist