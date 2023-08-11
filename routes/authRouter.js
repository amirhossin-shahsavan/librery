const express = require("express")

const router = express.Router()
const userAuthController = require("../controllers/auth/userAuth")

router.post("/signup", userAuthController.signUp)
router.post("/login", userAuthController.login)


module.exports = router