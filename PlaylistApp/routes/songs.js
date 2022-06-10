const express = require("express")

// Controller
const SongsController = require("../controllers/songs")
// const authPermissions = require("../middleware/authPermissions")

const router = express.Router()

// router.use(authPermissions({
//     authRequired:false,
//     exclude:["/logout"]
// }))

router.get("/",SongsController.getAll)

router.post("/",SongsController.create)


module.exports = router