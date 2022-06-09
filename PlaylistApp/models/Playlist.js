const { query } = require("../libs/database");

class Playlist{
    static async getMyPlaylists(idUser){
        try {
            const result = await query("SELECT * FROM playlists WHERE owner=?",[idUser])
            return {
                success:true,
                result
            }
        } catch ({message}) {
            return {
                success:false,
                message
            }
        }
    }

    static async create(data){
        try {
            const result =await query("INSERT INTO playlists(??) VALUES(?)",[Object.keys(data),Object.values(data)])
            return {
                success:true,
                result
            }
        } catch ({message}) {
            return {
                success:false,
                message
            }
        }
    }
}

module.exports = Playlist