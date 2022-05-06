const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    images: [String],
    description: {
      type: String,
      required: true,
    },
    location: {
      name: {
        type: String,
      },
      district: {
        type: String,
      },
      division: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Place", PlaceSchema);
