const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.register = (userData) => User.create(userData);

exports.register = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Email or passowrd is invalid");
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("Email or passowrd is invalid");
  }
};
