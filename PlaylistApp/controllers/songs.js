const Song = require("../models/Song")

class SongsController{
    static async getAll(req,res){
        const {result} = await Song.getAll()

        console.log(result)
        return res.render("songs",{
            songs:result
        })
    }
    static async create(req,res){
        const {success,result,message} = await Song.create(req.body)

        if(success){
            return res.redirect("/songs")
        }

        return res.render("playlists",{
            song:req.body,
            error:message
        })
    }
}

module.exports = SongsController