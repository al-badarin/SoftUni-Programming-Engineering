const router = require("express").Router();
const recipeServices = require("../services/recipeServices");

router.get("/", async (req, res) => {
  const latestRecipes = await recipeServices.getLatest().lean();

  res.render("home", { latestRecipes });
});

router.get("/search", async (req, res) => {
  const query = req.query.search || "";
  const recipes = await recipeServices.search(query).lean();
  res.render("search", { recipes, query });
});

module.exports = router;
