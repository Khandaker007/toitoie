const asyncHandler = require("express-async-handler");

// Models
const Place = require("../models/place.model");

// @desc  Get all places
// @route GET api/place
// @access Private
const getPlaces = asyncHandler(async (req, res) => {});

// @desc  Add a new place
// @route POST api/place
// @access Private
const addPlace = asyncHandler(async (req, res) => {});

// @desc  Update an existing place
// @route PUT api/place
// @access Private
const updatePlace = asyncHandler(async (req, res) => {});

// @desc  Delete an existing place
// @route DELETE api/place
// @access Private
const deletePlace = asyncHandler(async (req, res) => {});

module.exports = {
  getPlaces,
  addPlace,
  updatePlace,
  deletePlace,
};
