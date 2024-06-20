const Stone = require("../models/Stone");
const User = require("../models/User");

exports.getAll = () => Stone.find();

exports.getOne = (stoneId) => Stone.findById(stoneId).populate("owner");

// TODO:
//exports.getLatest

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

  return createdStone;
};

// TODO:
//exports.edit

exports.delete = async (stoneId) => Stone.findByIdAndDelete(stoneId);
