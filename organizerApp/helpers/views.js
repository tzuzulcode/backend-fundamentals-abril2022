const path = require("path")

function view(htmlFileName,res){
    return res.sendFile(path.join(__dirname,"..","views",htmlFileName))
}

module.exports = view