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

router.get("/add-recipe", isAuth, (req, res) => {
  res.render("recipes/create");
});

router.post("/add-recipe", isAuth, async (req, res) => {
  const recipeData = req.body;

  try {
    await recipeServices.create(req.user._id, recipeData);

    res.redirect("/recipes");
  } catch (err) {
    res.render("recipes/create", {
      ...recipeData,
      error: getErrorMessage(err),
    });
  }
});

module.exports = router;