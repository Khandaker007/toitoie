const express = require("express");
const dotenv = require("dotenv").config();

// Initialize App
const app = express();

// Serve on Home Root
app.get("/", (req, res) => {
  res.send("Toitoie Server is running and is ready to process requests...");
});

// PORT
const PORT = process.env.PORT || 5000;

// Listen for Requests
app.listen(PORT, () => {
  console.log(`Toitoi Server is running on PORT: ${PORT}...`);
});
