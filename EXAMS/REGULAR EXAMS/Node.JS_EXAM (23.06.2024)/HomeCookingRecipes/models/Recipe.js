const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [2, "Title must be at least 2 characters long"],
    },
    ingredients: {
      type: String,
      required: [true, "Ingredients are required"],
      minlength: [10, "Ingredients must be at least 10 characters long"],
      maxlength: [200, "Ingredients cannot be more than 200 characters long"],
    },
    instructions: {
      type: String,
      required: [true, "Instructions are required"],
      minlength: [10, "Instructions must be at least 10 characters long"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [10, "Description must be at least 10 characters long"],
      maxlength: [100, "Description cannot be more than 100 characters long"],
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
      match: [/^https?:\/\//, "Image URL must start with http:// or https://"],
    },
    recommendList: [
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
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
