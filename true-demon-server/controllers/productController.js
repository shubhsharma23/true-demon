// productController.js
const Product = require('../models/Product')

const saveProductDetails = async (req, res) => {
    try {
            const product = new Product(productData)
            await product.save()
        console.log("Product data has been saved")
        res.status(200).send("Product data has been saved")
    } catch (error) {
        console.error('Error while saving product data:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
}



const getProducts = async (req, res) => {
    // console.log("fetching products details from mongoDBCompass")
    try {
        // Retrieve all products from the database
        const products = await Product.find()
        console.log('Products retrieved successfully:', products.length)
        res.json(products)
    } catch (error) {
        console.error('Error retrieving products:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

module.exports = {
    saveProductDetails,
    getProducts
}
