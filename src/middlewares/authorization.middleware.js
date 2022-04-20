const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// Models
const User = require("../models/user.model");

const protectRoute = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get Token from User
      token = req.headers.authorization.split(" ")[1];

      // Verify & Decode Token
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      // Get User from Token
      req.user = await User.findById(decodedToken.id).select("-password");

      next();
    } catch (err) {
      console.log(
        "Authorization DENIED: ".brightRed.underline +
          err.message.brightRed.underline
      );

      res.status(401);
      throw new Error("Authorization DENIED!");
    }

    if (!token) {
      console.log("Authorization DENIED. NO TOKEN FOUND".brightRed.underline);

      res.status(401);
      throw new Error("Auth Token NOT Found!");
    }
  }
});

module.exports = protectRoute;
