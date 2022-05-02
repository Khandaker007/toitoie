const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    userImg: {
      type: String,
    },
    phoneNum: {
      type: String,
    },
    address: {
      country: {
        type: String,
      },
      city: {
        type: String,
      },
      street: {
        type: String,
      },
      postalCode: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", UserSchema);
