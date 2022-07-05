const {Router} = require("express")
const FoodController = require("../controllers/food")
const authValidation = require("../middleware/authValidation")


const router = Router()
router.use(authValidation({
    requiredRole:"ADMIN",
    excent:["/"]
}))

router.get("/",FoodController.getAll)
router.get("/addFood",FoodController.getAddForm)
router.post("/addFood",FoodController.add)
router.post("/addCategory",FoodController.addCategory)



module.exports = router