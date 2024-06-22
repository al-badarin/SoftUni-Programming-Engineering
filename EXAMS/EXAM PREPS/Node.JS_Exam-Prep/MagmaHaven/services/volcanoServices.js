const User = require("../models/User");
const Volcano = require("../models/Volcano");

exports.getAll = () => Volcano.find();

exports.getOne = (volcanoId) => Volcano.findById(volcanoId).populate("owner");

exports.vote = async (volcanoId, userId) => {
  const volcano = await Volcano.findById(volcanoId);
  const user = await User.findById(userId);

  volcano.voteList.push(userId);
  user.votedForVolcanoes.push(volcanoId);

  await volcano.save();
  await user.save();
};

exports.create = async (userId, volcanoData) => {
  const createdVolcano = await Volcano.create({
    owner: userId,
    ...volcanoData,
  });

  await User.findByIdAndUpdate(userId, {
    $push: { createdVolcanoes: createdVolcano._id },
  });

  return createdVolcano;
};

exports.edit = (volcanoId, volcanoData) =>
  Volcano.findByIdAndUpdate(volcanoId, volcanoData, { runValidators: true });

exports.delete = (volcanoId) => Volcano.findByIdAndDelete(volcanoId);

exports.search = (searchString, type) => {
  const searchPattern = new RegExp(searchString, "i");

  const query = {
    $or: [
      { name: { $regex: searchPattern } },
      { typeVolcano: { $regex: searchPattern } },
    ],
  };

  if (type) {
    query.typeVolcano = type; 
  }

  const volcanoes = Volcano.find(query);

  return volcanoes;
};
