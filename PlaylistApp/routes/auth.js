const express = require("express")

// Controller
const AuthController = require("../controllers/auth")

const router = express.Router()

router.get("/login",AuthController.getLoginForm)

router.post("/login",AuthController.login)


module.exports = router