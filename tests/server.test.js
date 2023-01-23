// three tests
//1. Super Sim[ple Test
//2. Something that uses the database
//3. Something that uses the database and authentication header


const request = require("supertest");
const mongoose = require("mongoose");
const { app } = require("../src/server");

let token;

beforeAll( async () => {
    await mongoose.connect("mongodb://localhost:27017/ecommerce")

    const response = await request(app).post("/auth/login").send({
        username: "jyenese",
        password: "password"
    })
    token = response.body.token;
})

afterAll(async () => {
    await mongoose.connection.close();
})
//1. Super Simple Test
describe("Server Homepage", () => {
    it("show data sent message", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.text).toEqual(expect.stringContaining("Data Sent"))
    })
})

//2. Something that uses the database
describe("Gets Products", () => {
    it("gets product list", async () => {
        const response = await request(app).get("/products");
        expect(response.statusCode).toBe(200);
    })
})
//3. Something that uses the database and authentication header
describe("Create a Product",  () => {
    it("creates a product", async () => {
        const response = await request(app).post("/products")
        .set({ Authorization: `Bearer ${token}`})
        .send({
            title: "Test Product",
            description: "Test Description",
            price: 100,
            stock: 20
        })
        expect(response.statusCode).toBe(200);
        expect(response.body.title).toEqual("Test Product");
        })
    })

