const express = require('express');

const { registerUser, loginUser, loginAdmin } = require("./userControllers")

const userRouter = express.Router()

userRouter.post("/register", async (req, res) => {
    const token = await registerUser({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    })
    if(token.error) {
        return res.status(400).json({data: token.error})
    }
    return res.json(token)
})

userRouter.post("/login", async (req, res) => {
    const token = await loginUser({
        username: req.body.username,
        password: req.body.password
    })
    if(token.error) {
        return res.status(400).json({data: token.error})
    }
    return res.json(token)
})

userRouter.post("/admin/login", async (req, res) => {
    console.log(req.body.password)
    const token = await loginAdmin({
        username: req.body.username,
        password: req.body.password
    })
    return res.json(token)
})


module.exports = userRouter;