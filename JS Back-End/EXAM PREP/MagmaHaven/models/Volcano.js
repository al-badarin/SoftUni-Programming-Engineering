const mongoose = require("mongoose");

const volcanoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: [2, "Name should be at least 2 characters long"],
    },
    location: {
      type: String,
      required: true,
      minlength: [3, "Location should be at least 3 characters long"],
    },
    elevation: {
      type: Number,
      required: true,
      min: [0, "Elevation should be a minimum of 0"],
    },
    lastEruption: {
      type: Number,
      required: true,
      min: [0, "Year of Last Eruption should be between 0 and 2024"],
      max: [2024, "Year of Last Eruption should be between 0 and 2024"],
    },
    image: {
      type: String,
      required: true,
      match: [
        /^https?:\/\/.*/,
        "Volcano Image should start with http:// or https://",
      ],
    },
    typeVolcano: {
      type: String,
      required: true,
      enum: [
        "Supervolcanoes",
        "Submarine",
        "Subglacial",
        "Mud",
        "Stratovolcanoes",
        "Shield",
      ],
    },
    description: {
      type: String,
      required: true,
      minlength: [10, "Description should be a minimum of 10 characters long"],
    },
    voteList: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Volcano = mongoose.model("Volcano", volcanoSchema);

module.exports = Volcano;
