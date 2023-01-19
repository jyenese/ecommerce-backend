const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./controllers/products/productRoutes');
const cartRouter = require('./controllers/carts/cartRoutes');
const userRouter = require('./controllers/users/userRoutes');
const app = express();
const PORT = 3000;

app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        data: "Data Sent"
    })
})

app.use("/products", productRouter)
app.use("/carts", cartRouter)
app.use("/users", userRouter)

app.listen(PORT, () => {
    console.log(`Server is running`);
    mongoose.set('strictQuery', false);
    mongoose.connect("mongodb://localhost:27017/ecommerce", () => {
        console.log("Database is connected");
    })
})
