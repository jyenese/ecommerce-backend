const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    user_id: String,
    description: String,
})

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 25,
    },
    description: {
        type: String,
        required: true,
        validate:{
            validator: (value) => {
                return !value.includes("hello")
            },
            message: "Description cannot include the word 'hello'"
        }
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price cannot be negative"],
    },
    stock: Number,
    reviews: [ReviewSchema],
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;