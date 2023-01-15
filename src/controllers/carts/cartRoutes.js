const express = require('express');
const { getCarts, getCartById, getCartByUserId} = require('./cartControllers');
const cartRouter = express.Router();

cartRouter.get("/", (req, res) => {
    const carts = getCarts()
    res.json(carts)
})

cartRouter.get("/:cartId", (req, res) => {
    const cart = getCartById(req.params.cartId)
    if(!cart) {
        res.status(404).json({
            data: "cart not found"
        })
    }
    res.json(cart)
})

cartRouter.get("/user/:userId", (req, res) => {
    const cart = getCartByUserId(req.params.userId)
    if(!cart) {
        res.status(404).json({
            data: "Cart not found"
        })
    }
    res.json(cart)
})

module.exports = cartRouter;