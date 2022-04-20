const express = require("express");

const router = express.Router();

// Middlewares
const protectRoute = require("../middlewares/authorization.middleware");

// Controllers
const {
  registerUser,
  loginUser,
  getAuthenticatedUser,
} = require("../controllers/user.controllers");

// Register User Route
router.post("/", registerUser);

// Login User Route
router.post("/login", loginUser);

// Fetch Authenticated (Logged In) User
router.get("/", protectRoute, getAuthenticatedUser);

module.exports = router;
