const mongoose = require("mongoose");

const stoneSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [2, "Name must be at least 2 characters long"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      minlength: [3, "Category must be at least 3 characters long"],
    },
    color: {
      type: String,
      required: [true, "Color is required"],
      minlength: [2, "Color must be at least 2 characters long"],
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
      match: [/^https?:\/\//, "Image URL must start with http:// or https://"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      minlength: [5, "Location must be between 5 and 15 characters long"],
      maxlength: [15, "Location must be between 5 and 15 characters long"],
    },
    formula: {
      type: String,
      required: [true, "Formula is required"],
      minlength: [3, "Formula must be between 3 and 30 characters long"],
      maxlength: [30, "Formula must be between 3 and 30 characters long"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [10, "Description must be at least 10 characters long"],
    },
    likedList: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    owner: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Stone = mongoose.model("Stone", stoneSchema);

module.exports = Course;
