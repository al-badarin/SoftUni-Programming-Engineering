const { isAuth } = require("../middlewares/authMiddleware");
const { getErrorMessage } = require("../utils/errorUtils");

//TODO: add recommendGuard
//TODO: add {isRecipeOwner}

const recipeServices = require("../services/recipeServices");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const recipes = await recipeServices.getAll().lean();

  res.render("recipes/catalog", { recipes });
});

//TODO: get - details
//TODO: post - details

router.get("/add-recipes", isAuth, (req, res) => {
  res.render("recipes/create");
});

module.exports = router;
