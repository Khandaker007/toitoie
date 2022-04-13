// @desc    Register User
// @route   POST api/user/
// @access  Public
const registerUser = (req, res) => {
  res.send("Register User Route Reached!");
};

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
