const Recipe = require("../models/Recipe");
const User = require("../models/User");

exports.getAll = () => Recipe.find();

exports.getOne = (recipeId) => Recipe.findById(recipeId).populate("owner");

exports.getLatest = () => Recipe.find().sort({ createdAt: -1 }).limit(3);

exports.recommend = async (recipeId, userId) => {
  const recipe = await Recipe.findById(recipeId);
  const user = await User.findById(userId);

  recipe.recommendList.push(userId);
  user.recommendedRecipes.push(recipeId);

  await recipe.save();
  await user.save();
};

exports.create = async (userId, recipeData) => {
  const createdRecipe = await Recipe.create({
    owner: userId,
    ...recipeData,
  });

  await User.findByIdAndUpdate(userId, {
    $push: { createdRecipes: createdRecipe._id },
  });

  return createdRecipe;
};

exports.edit = (recipeId, recipeData) =>
  Recipe.findByIdAndUpdate(recipeId, recipeData, { runValidators: true });

exports.delete = (recipeId) => Recipe.findByIdAndDelete(recipeId);

exports.search = (query) => {
  const searchPattern = new RegExp(query, "i");
  return Recipe.find({ title: searchPattern });
};
