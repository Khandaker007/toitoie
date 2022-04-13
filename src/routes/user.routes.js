const express = require("express");

const router = express.Router();

// Register User Route
router.post("/", (req, res) => {
  res.send("Register User Route Reached!");
});

// Login User Route
router.post("/login", (req, res) => {
  res.send("Login User Route Reached!");
});

// Fetch Authenticated (Logged In) User
router.get("/", (req, res) => {
  res.send("Get Me Route Reached!");
});

module.exports = router;
