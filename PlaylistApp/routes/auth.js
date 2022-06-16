const express = require("express")

// Controller
const AuthController = require("../controllers/auth") // Importación de una clase
const authController = new AuthController() //Instancia de una clase (Objeto)
const authPermissions = require("../middleware/authPermissions")

const router = express.Router()

router.use(authPermissions({
    authRequired:false,
    exclude:["/logout"]
}))

router.get("/login",AuthController.getLoginForm)

router.post("/login",AuthController.login)

router.get("/signup",AuthController.getSignUpForm)

// Esto no funciona, signUp pierde la referencia al prototype, no puede usar this.
// router.post("/signup",authController.signUp)

// Esto si funciona:
router.post("/signup",(req,res)=>{
    authController.signUp(req,res)
})
// router.post("/signup",authController.signUp.bind(AuthController))
// router.post("/signup",(...args)=>authController.signUp(...args))

// lambdas

router.get("/logout",AuthController.logout)


module.exports = router