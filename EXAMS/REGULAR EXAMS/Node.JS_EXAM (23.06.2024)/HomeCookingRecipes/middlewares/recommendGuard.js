const recipeServices = require("../services/recipeServices");

module.exports = async (req, res, next) => {
  const recipe = await recipeServices.getOne(req.params.recipeId);

  if (!req.user) {
    return res.status(403).redirect("/auth/login");
  }

  if (recipe.owner._id.toString() === req.user._id.toString()) {
    return res.status(403).send("Owners cannot recommend their own recipes.");
  }

  if (recipe.recommendList.some(user => user._id.toString() === req.user._id.toString())) {
    return res.status(403).send('You have already recommended this recipe.');
}
  next();
};
