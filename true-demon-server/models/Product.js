const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    print_category: {
        type: String,
        required: true
    },
    print_name: {
        type: String,
        required: true
    },
    image: String,
    rating: {
        rate: Number,
        count: Number
    },
    sizes: {
        S: Number,
        M: Number,
        L: Number,
        XL: Number,
        XXL: Number
    },
    priority: {
        type: Number,
        required: true
    },
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deleted: {
        type: Boolean,
        default: false
    }
});

productSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
