const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    minLength: [2, "The username should be at least 2 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    unique: true,
    match: [/@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/, "Invalid Email Address"],
    minLength: [10, "Email should be at least 10 characters"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [4, "Password should be at least 4 characters"],
  },
  createdCourses: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Course",
    },
  ],
  signedUpCourses: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Course",
    },
  ],
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
