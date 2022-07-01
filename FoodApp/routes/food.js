const {Router} = require("express")
const FoodController = require("../controllers/food")

const router = Router()

router.get("/food",FoodController.getAll)
router.get("/admin/addFood",FoodController.getAddForm)
router.post("/admin/addFood",FoodController.add)
router.post("/admin/addCategory",FoodController.addCategory)



module.exports = router