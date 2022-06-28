const {Router} = require("express")
const UsersController = require("../controllers/users")

const router = Router()

// 1. Definir el metodo
// 2. ejecutar el metodo

router.get("/users",UsersController.getAll)
router.get("/users/:id",UsersController.getOne)
router.post("/users/:id",UsersController.updateOne)


module.exports = router