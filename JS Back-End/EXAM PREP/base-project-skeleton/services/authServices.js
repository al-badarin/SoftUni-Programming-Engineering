const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (userData) => {
  if (userData.password !== userData.rePassword) {
    throw new Error("Password missmatch");
  }

  const user = await User.find({ email: userData.email });
  if (user) {
    throw new Error("User already exists");
  }

  return User.create(userData);
};

exports.login = async ({ email, password }) => {
  // Check if user exists
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Email or passowrd is invalid");
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("Email or passowrd is invalid");
  }

  // Generate token
  jwt.sign();

  // return token
};
