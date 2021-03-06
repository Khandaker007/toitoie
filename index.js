const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const logTime = require("log-timestamp");

// Configs
const connectDB = require("./src/configs/db.config");

// Routes
const userRoutes = require("./src/routes/user.routes");
const packageRoutes = require("./src/routes/package.routes");
const placeRoutes = require("./src/routes/place.routes");

// Middlewares
const errorHandler = require("./src/middlewares/errorHandler.middleware");

// Initialize App
const app = express();

// Connect to toitoie Database
connectDB();

// Initialize Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve on Home Root
app.get("/", (req, res) => {
  res.send("Toitoie Server is running and is ready to process requests...");
});

// toitoie Server Routes
app.use("/api/user", userRoutes);
app.use("/api/package", packageRoutes);
app.use("/api/place", placeRoutes);

// Error Handler Middleware
app.use(errorHandler);

// PORT
const PORT = process.env.PORT || 5000;

// Listen for Requests
app.listen(PORT, () => {
  console.log(
    `Toitoi Server is running on PORT: ${PORT}...`.underline.brightBlue
  );
});
