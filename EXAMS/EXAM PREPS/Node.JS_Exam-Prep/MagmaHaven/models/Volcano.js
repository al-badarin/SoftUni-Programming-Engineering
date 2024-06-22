const mongoose = require("mongoose");

const volcanoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [2, "Name should be at least 2 characters long"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      minlength: [3, "Location should be at least 3 characters long"],
    },
    elevation: {
      type: Number,
      required: [true, "Elevation is required"],
      min: [0, "Elevation should be a minimum of 0"],
    },
    lastEruption: {
      type: Number,
      required: [true, "Year of Last Eruption is required"],
      min: [0, "Year of Last Eruption should be between 0 and 2024"],
      max: [2024, "Year of Last Eruption should be between 0 and 2024"],
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
      match: [
        /^https?:\/\/.*/,
        "Volcano Image should start with http:// or https://",
      ],
    },
    typeVolcano: {
      type: String,
      required: [true, "Type of Volcano is required"],
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
      required: [true, "Description is required"],
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
      required: [true, "Owner is required"],
    },
  },
  { timestamps: true }
);

const Volcano = mongoose.model("Volcano", volcanoSchema);

module.exports = Volcano;
