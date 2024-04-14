// product.js (Backend Schema)
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String, // Storing image URLs
        required: true // You can adjust this as per your requirement
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
