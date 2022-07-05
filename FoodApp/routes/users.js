const {Router} = require("express")
const UsersController = require("../controllers/users")
const authValidation = require("../middleware/authValidation")

const router = Router()
router.use(authValidation({
    requiredRole:"ADMIN"
}))
// 1. Definir el metodo
// 2. ejecutar el metodo

router.get("/",UsersController.getAll)
router.get("/:id",UsersController.getOne)
router.post("/:id",UsersController.updateOne)
router.post("/delete/:id",UsersController.deleteOne)


module.exports = router