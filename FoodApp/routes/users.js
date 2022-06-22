const {Router} = require("express")
const UsersController = require("../controllers/users")

const router = Router()


router.get("/users",UsersController.getAll)


module.exports = router