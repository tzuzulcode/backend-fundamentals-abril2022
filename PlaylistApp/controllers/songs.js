const Song = require("../models/Song")
const Playlist = require("../models/Playlist")

class SongsController{
    static async getAll(req,res){
        const {result:songs} = await Song.getAll()
        const {result:playlists} = await Playlist.getMyPlaylists(req.session.user.idUser)

        console.log(songs)
        console.log(playlists)
        return res.render("songs",{
            songs:songs,
            playlists:playlists
        })
    }
    static async create(req,res){
        const {success,result,message} = await Song.create(req.body)

        if(success){
            return res.redirect("/songs")
        }

        return res.render("songs",{
            song:req.body,
            error:message
        })
    }
}

module.exports = SongsController