const express = require("express")

// Controller
const AuthController = require("../controllers/auth")
const authPermissions = require("../middleware/authPermissions")

const router = express.Router()

router.use(authPermissions({
    authRequired:false,
    exclude:["/logout"]
}))

router.get("/login",AuthController.getLoginForm)

router.post("/login",AuthController.login)

router.get("/signup",AuthController.getSignUpForm)

router.post("/signup",AuthController.signUp)

router.get("/logout",AuthController.logout)


module.exports = router