const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");

describe("GET /", () => {
  it("should respond with 'Hello from backend!'", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("Hello from backend!");
  });
});

// Close MongoDB connection after all tests
afterAll(async () => {
  await mongoose.connection.close();
});