const express = require('express')
const Controller = require('../controllers/userController')
const router = express.Router()


router.post('/register', Controller.register)
router.post('/login', Controller.login)
router.post('/googleSignIn', Controller.googleSignIn)






module.exports = router