const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema(
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
    highlights: [String],
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
    duration: {
      days: {
        type: Number,
      },
      nights: {
        type: Number,
      },
    },
    pricePerPerson: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Package", PackageSchema);
