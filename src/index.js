const express = require('express');
const productRouter = require('./controllers/products/productRoutes');
const cartRouter = require('./controllers/carts/cartRoutes');
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

app.listen(PORT, () => {
    console.log(`Server is running`);
})
