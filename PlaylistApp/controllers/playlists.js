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

    static async addSongToPlaylist(req,res){
        const {idPlaylist,idSong} = req.body
        // const idSong = req.body.idSong
        // const idPlaylist = req.body.idPlaylist

        const {result,message,success} = await Playlist.addSong(idPlaylist,idSong)
        
        return res.status(success?200:400).json({
            result:result,
            message:message
        })
    }
    static async removeSongFromPlaylist(req,res){
        const {idPlaylist,idSong} = req.body
        // const idSong = req.body.idSong
        // const idPlaylist = req.body.idPlaylist

        const {result,message,success} = await Playlist.removeSong(idPlaylist,idSong)
        
        return res.status(success?200:400).json({
            result:result,
            message:message
        })
    }

}

module.exports = Playlists