const { query } = require("express");
const Stone = require("../models/Stone");
const User = require("../models/User");

exports.getAll = () => Stone.find();

exports.getOne = (stoneId) => Stone.findById(stoneId).populate("owner");

exports.getLatest = () => Stone.find().sort({ createdAt: -1 }).limit(3);

exports.like = async (stoneId, userId) => {
  const stone = await Stone.findById(stoneId);
  const user = await User.findById(userId);

  stone.likedList.push(userId);
  user.likedStones.push(stoneId);

  await stone.save();
  await user.save();
};

exports.create = async (userId, stoneData) => {
  const createdStone = await Stone.create({
    owner: userId,
    ...stoneData,
  });

  await User.findByIdAndUpdate(userId, {
    $push: { createdStones: createdStone._id },
  });

  return createdStone;
};

exports.edit = (stoneId, stoneData) =>
  Stone.findByIdAndUpdate(stoneId, stoneData, { runValidators: true });

exports.delete = (stoneId) => Stone.findByIdAndDelete(stoneId);

exports.search = (query) => {
  const searchPattern = new RegExp(query, "i");
  return Stone.find({ name: searchPattern });
};
