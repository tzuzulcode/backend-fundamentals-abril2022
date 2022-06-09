const express = require("express")

// Controller
const PlaylistsController = require("../controllers/playlists")
// const authPermissions = require("../middleware/authPermissions")

const router = express.Router()

// router.use(authPermissions({
//     authRequired:false,
//     exclude:["/logout"]
// }))

router.get("/",PlaylistsController.getMyPlaylists)

router.post("/",PlaylistsController.create)


module.exports = router