const express = require('express');

const products = [
    {
        title: "Ring",
        description: "Wedding Ring",
        price: 4200,
        stock: 5
    },
    {
        title: "Watch",
        description: "Rolex Watch",
        price: 10000,
        stock: 2
    },
    {
        title: "Shoes",
        description: "Nike Shoes",
        price: 500,
        stock: 10
    },
    {
        title: "Shirt",
        description: "T-Shirt",
        price: 100,
        stock: 20
    },
    {
        title: "Pants",
        description: "Jeans",
        price: 145,
        stock: 15
    }
]

function getProducts () {
    return products
}
function getProductById(productId) {
    const product = products[productId]
    return product
}

function createProduct(product) {
    const newProduct = {
        id: 4,
        ...product,
    }
    return newProduct
}

module.exports = {
    getProducts,
    getProductById,
    createProduct
}