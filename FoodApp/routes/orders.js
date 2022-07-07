const {Router} = require("express")
const OrdersController = require("../controllers/orders")
const authValidation = require("../middleware/authValidation")

const router = Router()

router.use(authValidation({
    requiredRole:"NORMAL"
}))

router.get("/",OrdersController.getActualOrder)
router.get("/complete",OrdersController.makeOrderCompleted)
router.get("/completed",OrdersController.getCompletedOrders)
router.get("/add/:idFood",OrdersController.addFood)
router.get("/delete/:idFood",OrdersController.deleteFood)

module.exports = router