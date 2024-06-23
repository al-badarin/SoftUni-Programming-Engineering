const recipeServices = require("../services/recipeServices");

async function isRecipeOwner(req, res, next) {
  const recipe = await recipeServices.getOne(req.params.recipeId);

  if (recipe.owner._id.toString() !== req.user._id.toString()) {
    return res.redirect(`/recipes/${req.params.recipeId}/details`);
  }

  next();
}

exports.isRecipeOwner = isRecipeOwner;
