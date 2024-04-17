const mongoose = require('mongoose');

const MongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectDB = async () => {
    try {
        await mongoose.connect(MongoURI, {
            useNewUrlParser: true, // Deprecated but safe to include
            useUnifiedTopology: true // Deprecated but safe to include
        });
        console.log("MongoDB database connected");
    } catch (err) {
        console.error("Error during database connection", err);
    }
}

module.exports = connectDB;
