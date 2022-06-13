const { query } = require("../libs/database");

class Playlist{
    static async getMyPlaylists(idUser){
        return await query("SELECT * FROM playlists WHERE owner=?",[idUser])
    }

    static async create(data){
        return await query("INSERT INTO playlists(??) VALUES(?)",[Object.keys(data),Object.values(data)])
    }

    static async addSong(idPlaylist,idSong){
        return await query("INSERT INTO playlists_songs(id_playlist,id_song) VALUES(?,?)",[idPlaylist,idSong])
    }
    static async removeSong(idPlaylist,idSong){
        return await query("DELETE FROM playlists_songs WHERE id_playlist = ? AND id_song = ?",[idPlaylist,idSong])
    }
}

module.exports = Playlist