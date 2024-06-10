const mongoose = require("mongoose");

const castSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [5, "Name must be at least 5 characters long"],
    match: [
      /^[a-zA-Z0-9\s]+$/,
      "Name can only contain English letters, digits, and whitespaces",
    ],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [14, "Age must be between 14 and 120"],
    max: [120, "Age must be between 14 and 120"],
  },
  born: {
    type: String,
    required: [true, "Born location is required"],
    minlength: [10, "Born location must be at least 10 characters long"],
    match: [
      /^[a-zA-Z0-9\s]+$/,
      "Born location can only contain English letters, digits, and whitespaces",
    ],
  },
  nameInMovie: {
    type: String,
    required: [true, "Name in movie is required"],
    minlength: [5, "Name in movie must be at least 5 characters long"],
    match: [
      /^[a-zA-Z0-9\s]+$/,
      "Name in movie can only contain English letters, digits, and whitespaces",
    ],
  },
  castImage: {
    type: String,
    required: [true, "Cast image URL is required"],
    match: [
      /^https?:\/\//,
      "Cast image URL must start with http:// or https://",
    ],
    validate: {
      validator(value) {
        return /^https?:\/\//.test(value);
      },
      message: (props) =>
        `${props.value} is an invalid URL for the cast image!`,
    },
  },
  // movies: [
  //   {
  //     type: mongoose.Types.ObjectId,
  //     ref: "Movie",
  //   },
  // ],
});

const Cast = mongoose.model("Cast", castSchema);

module.exports = Cast;
