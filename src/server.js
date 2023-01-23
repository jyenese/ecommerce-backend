const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require("dotenv").config()

const productRouter = require('./controllers/products/productRoutes');
const cartRouter = require('./controllers/carts/cartRoutes');
const userRouter = require('./controllers/users/userRoutes');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(helmet())



const corsOption = {
    origin: ["http://localhost:3000"],
    optionSuccessStatus: 200,
}

app.use(cors(corsOption))

app.get("/", (req, res) => {
    res.json({
        data: "Data Sent"
    })
})

app.use("/products", productRouter)
app.use("/carts", cartRouter)
app.use("/auth", userRouter)

module.exports = {
    app,
    PORT
}
