//userController
const connectDB = require('../config/db');
const User = require('../models/User');

const getUserDetails = async (req, res) => {
    try {
        await connectDB(); // Connect to the database
        const users = await User.find({});
        console.log('users retrieved successfully:', users);
        res.json(users);
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getUserDetails
};
