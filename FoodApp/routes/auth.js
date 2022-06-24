const {Router} = require("express")
const AuthController = require("../controllers/auth")

const router = Router()

router.get("/signup",AuthController.getSignUpForm)
router.post("/signup",AuthController.signup)
router.get("/login",AuthController.getLoginForm)
router.post("/login",AuthController.login)


module.exports = router