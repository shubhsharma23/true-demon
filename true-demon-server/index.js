const express = require('express')
const path = require('path')
const config = require('config')
const connectDB = require('./config/db');

const app = express()
app.use(express.json())

connectDB()

app.get('/', (req, res)=>{
    res.json({status:"200", message:"server is running"})
})

app.listen(8000)