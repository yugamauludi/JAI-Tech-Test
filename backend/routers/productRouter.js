const express = require('express')
const Controller = require('../controllers/productController')
const { authenticationUser } = require('../middleware/authentication')
const router = express.Router( )

router.get('/', Controller.findAll)
router.get('/orderedProduct', authenticationUser, Controller.orderedProduct)
router.post('/addProduct', authenticationUser, Controller.addProduct)
router.post('/addOrder/:productId', authenticationUser, Controller.addOrder)
router.get('/:id', Controller.detail)


module.exports = router