const express = require("express");

const router = express.Router();

// Middlewares
const protectRoute = require("../middlewares/authorization.middleware");

// Controllers
const {
  getPackages,
  addPackage,
  updatePackage,
  deletePackage,
} = require("../controllers/package.controllers");

// Get all packages Route
router.get("/", protectRoute, getPackages);

// Add a new package Route
router.post("/", protectRoute, addPackage);

// Update an existing package Route
router.put("/", protectRoute, updatePackage);

// Delete an existing package Route
router.delete("/", protectRoute, deletePackage);

module.exports = router;
