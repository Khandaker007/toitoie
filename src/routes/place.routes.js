const express = require("express");

const router = express.Router();

// Middlewares
const protectRoute = require("../middlewares/authorization.middleware");

// Controllers
const {
  getPlaces,
  addPlace,
  updatePlace,
  deletePlace,
} = require("../controllers/place.controllers");

// Get all places Route
router.get("/", protectRoute, getPlaces);

// Add a new place Route
router.post("/", protectRoute, addPlace);

// Update an existing place Route
router.put("/", protectRoute, updatePlace);

// Delete an existing place Route
router.delete("/", protectRoute, deletePlace);

module.exports = router;
