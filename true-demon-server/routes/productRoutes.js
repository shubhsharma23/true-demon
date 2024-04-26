//productRoutes
const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController')

router.post('/saveProductDetails', productController.saveProductDetails)
router.get('/getProducts', productController.getProducts)

module.exports = router