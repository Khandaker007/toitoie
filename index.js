const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");

// Configs
const connectDB = require("./src/configs/db.config");

// Initialize App
const app = express();

// Connect to toitoie Database
connectDB();

// Serve on Home Root
app.get("/", (req, res) => {
  res.send("Toitoie Server is running and is ready to process requests...");
});

// PORT
const PORT = process.env.PORT || 5000;

// Listen for Requests
app.listen(PORT, () => {
  console.log(
    `Toitoi Server is running on PORT: ${PORT}...`.underline.brightBlue
  );
});
