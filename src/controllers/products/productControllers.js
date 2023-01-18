const express = require('express');

const Product = require('../../models/product');

// const products = [
//     {
//         title: "Ring",
//         description: "Wedding Ring",
//         price: 4200,
//         stock: 5
//     },
//     {
//         title: "Watch",
//         description: "Rolex Watch",
//         price: 10000,
//         stock: 2
//     },
//     {
//         title: "Shoes",
//         description: "Nike Shoes",
//         price: 500,
//         stock: 10
//     },
//     {
//         title: "Shirt",
//         description: "T-Shirt",
//         price: 100,
//         stock: 20
//     },
//     {
//         title: "Pants",
//         description: "Jeans",
//         price: 145,
//         stock: 15
//     }
// ]

async function getProducts () {
    const products  = await Product.find()
    return products
}
async function getProductById(productId) {
    try {
        const product = await Product.findById(productId)
        return product
    } catch (error) {
        console.log(error)
    }
}

async function createProduct(product) {
    const newProduct = await Product.create(product)
    return newProduct
}

async function deleteProduct(productId) {
    const deletedProduct = await Product.findByIdAndDelete(productId)
    return deletedProduct
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct,
}