const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jsonwebtoken");

const SECRET = 'jfew8u4i3qhng09384gurh9308hfuwqgn'

exports.register = async (userData) => {
  if (userData.password !== userData.rePassword) {
    throw new Error("Password missmatch");
  }

  const user = await User.findOne({ email: userData.email });
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
  const payload = {
    _id: user._id,
    username: user.username,
    email: user.email,
  };
  const token = await jwt.sign(payload, SECRET, { expiresIn: "2h" });

  // return token
  return token;
};
