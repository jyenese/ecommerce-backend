const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('./models/admin');

mongoose.connect("mongodb://localhost:27017/ecommerce", async () => {
    await Admin.deleteMany({})
    const hashedPassword = await bcrypt.hash("password", 10)
    const admin = await Admin.create({
        username: "admin",
        password: hashedPassword
    })
    console.log(admin)
    mongoose.connection.close()
})