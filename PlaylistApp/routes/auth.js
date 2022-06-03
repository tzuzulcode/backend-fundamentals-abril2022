const express = require("express")

// Controller
const AuthController = require("../controllers/auth")

const router = express.Router()

router.get("/login",AuthController.getLoginForm)

router.post("/login",AuthController.login)

router.get("/signup",AuthController.getSignUpForm)

router.post("/signup",AuthController.signUp)


module.exports = router