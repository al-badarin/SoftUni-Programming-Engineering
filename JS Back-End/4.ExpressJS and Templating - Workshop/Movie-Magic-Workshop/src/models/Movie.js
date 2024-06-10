const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [5, "Title must be at least 5 characters long"],
    match: [
      /^[a-zA-Z0-9\s]+$/,
      "Title can only contain English letters, digits, and whitespaces",
    ],
  },
  genre: {
    type: String,
    required: [true, "Genre is required"],
    lowercase: true,
    minlength: [5, "Genre must be at least 5 characters long"],
    match: [
      /^[a-zA-Z0-9\s]+$/,
      "Genre can only contain English letters, digits, and whitespaces",
    ],
  },
  director: {
    type: String,
    required: [true, "Director is required"],
    minlength: [5, "Director must be at least 5 characters long"],
    match: [
      /^[a-zA-Z0-9\s]+$/,
      "Director can only contain English letters, digits, and whitespaces",
    ],
  },
  year: {
    type: Number,
    required: [true, "Year is required"],
    min: [1900, "Year must be between 1900 and 2024"],
    max: [2024, "Year must be between 1900 and 2024"],
  },
  rating: {
    type: Number,
    required: [true, "Rating is required"],
    min: [1, "Rating must be between 1 and 5"],
    max: [5, "Rating must be between 1 and 5"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minlength: [20, "Description must be at least 20 characters long"],
    maxLength: [1000, "Description can be up to 1000 characters long"],
    match: [
      /^[a-zA-Z0-9\s]+$/,
      "Description can only contain English letters, digits, and whitespaces",
    ],
  },
  imageUrl: {
    type: String,
    required: [true, "Image URL is required"],
    match: [/^https?:\/\//, "Image URL must start with http:// or https://"]
  },
  casts: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Cast",
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
