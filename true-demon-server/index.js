//index.js

const express = require('express')
const config = require('./config/config')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

connectDB()

app.use('/products', productRoutes)

app.get('/', (req, res) => {
    res.json({ status: "200", message: "server is running" })
})

app.listen(config.server.port, () => {
    console.log(`Server is running on port ${config.server.port}`)
})