const Stone = require("../models/Stone");
const User = require("../models/User");

exports.getAll = () => Stone.find();

exports.getOne = (stoneId) => Stone.findById(stoneId).populate("owner")

exports.create = async (userId, stoneData) => {
  const createdStone = await Stone.create({
    owner: userId,
    ...stoneData,
  });

  return createdStone;
};