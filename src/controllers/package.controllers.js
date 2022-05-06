const asyncHandler = require("express-async-handler");

// Models
const Package = require("../models/package.model");

// @desc  Get all packages
// @route GET api/package
// @access Private
const getPackages = asyncHandler(async (req, res) => {});

// @desc  Add a new package
// @route POST api/package
// @access Private
const addPackage = asyncHandler(async (req, res) => {});

// @desc  Update an existing package
// @route PUT api/package
// @access Private
const updatePackage = asyncHandler(async (req, res) => {});

// @desc  Delete an existing package
// @route DELETE api/package
// @access Private
const deletePackage = asyncHandler(async (req, res) => {});

module.exports = {
  getPackages,
  addPackage,
  updatePackage,
  deletePackage,
};
