const express = require("express")

const router = express.Router()
const userAuthController = require("../controllers/auth/userAuth")

router.post("/signup", userAuthController.signUp)


module.exports = router