const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://mongo:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("✅ Connected to MongoDB");
});

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

// Start server
app.listen(5000, () => {
  console.log("✅ Backend listening on port 5000");
});