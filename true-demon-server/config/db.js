const mongoose = require('mongoose');
const config = require('./config');

const connectDB = async () => {
    try {
        await mongoose.connect(config.db.MongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB database connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error; // Re-throw the error to handle it in the caller function
    }
};

module.exports = connectDB;
