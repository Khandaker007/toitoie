const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

// Models
const User = require("../models/user.model");

// Utils
const generateJWT = require("../utils/generateJWT.util");

// @desc    Register User
// @route   POST api/user/
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check Required Fields
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all required fields!");
  }

  // Check if Email is already taken
  const userWithEmail = await User.findOne({ email });
  if (userWithEmail) {
    res.status(400);
    throw new Erorr("Email is already taken!");
  }

  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    email,
    password: hashedPassword,
  });

  if (user) {
    console.log(`User Registered. Email: ${user.email}`.brightGreen.underline);

    res.status(201).json({
      id: user.id,
      email: user.email,
      token: generateJWT(user.id),
    });
  } else {
    console.log(
      `User could NOT be Registered. Email: ${email}`.brightRed.underline
    );
    res.status(400);
    throw new Error("SERVER ERROR: User Registration NOT Successful!");
  }
});

// @desc    Login User
// @route   POST api/user/login
// @access  Public
const loginUser = (req, res) => {
  res.send("Login User Route Reached!");
};

// @desc    Fetch Authenticated (Logged In) User
// @route   GET api/user/
// @access  Private
const getAuthenticatedUser = (req, res) => {
  res.send("Get Me Route Reached!");
};

module.exports = {
  registerUser,
  loginUser,
  getAuthenticatedUser,
};
