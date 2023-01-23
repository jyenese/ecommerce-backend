const mongoose = require('mongoose');
const { app, PORT } = require('./server');

app.listen(PORT, () => {
    console.log(`Server is running`);
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URI, () => {
        console.log("Database is connected");
    })
})
