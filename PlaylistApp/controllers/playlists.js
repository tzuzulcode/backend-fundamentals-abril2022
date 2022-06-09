const Playlist = require("../models/Playlist")
class Playlists{
    static async getMyPlaylists(req,res){
        const {result} = await Playlist.getMyPlaylists(req.session.user.idUser)

        console.log(result)
        return res.render("playlists",{
            playlists:result
        })
    }
    static async create(req,res){
        const {success,result,message} = await Playlist.create({
            ...req.body,
            owner:req.session.user.idUser
        })

        if(success){
            return res.redirect("/playlists")
        }

        return res.render("playlists",{
            playlist:req.body,
            error:message
        })
    }
}

module.exports = Playlists