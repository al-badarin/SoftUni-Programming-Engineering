const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      //TODO: validations can be different!
      lowercase: true,
      unique: true,
      match: [/@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/, "Invalid Email Address"],
      minLength: [10, "Email should be at least 10 characters"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      //TODO: validations can be different!
      minLength: [6, "Password should be at least 6 characters"],
      match: [/^[a-zA-Z0-9]+$/, "Password should be alphanumeric"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  // if (this.isModified("password")) {
  this.password = await bcrypt.hash(this.password, 12);
  // }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
