const router = require("express").Router();
const recipeServices = require("../services/recipeServices");

router.get("/", async (req, res) => {
  const latestRecipes = await recipeServices.getLatest().lean();

  res.render("home", { latestRecipes });
});

module.exports = router;
