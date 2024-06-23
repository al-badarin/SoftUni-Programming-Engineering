const { isAuth } = require("../middlewares/authMiddleware");
const { getErrorMessage } = require("../utils/errorUtils");
const { isRecipeOwner } = require("../middlewares/recipeMiddleware");

const recommendGuard = require("../middlewares/recommendGuard");

const recipeServices = require("../services/recipeServices");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const recipes = await recipeServices.getAll().lean();

  res.render("recipes/catalog", { recipes });
});

router.get("/:recipeId/details", async (req, res) => {
  const recipe = await recipeServices.getOne(req.params.recipeId).lean();

  const isOwner = recipe.owner && recipe.owner._id == req.user?._id;
  const isRecommended = recipe.recommendList.some(
    (user) => user._id == req.user?._id
  );

  res.render("recipes/details", { ...recipe, isOwner, isRecommended });
});

router.get("/:recipeId/recommend", recommendGuard, async (req, res) => {
  await recipeServices.recommend(req.params.recipeId, req.user._id);

  res.redirect(`/recipes/${req.params.recipeId}/details`);
});

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

router.get("/:recipeId/edit", isRecipeOwner, async (req, res) => {
  const recipe = await recipeServices.getOne(req.params.recipeId).lean();

  res.render("recipes/edit", { ...recipe });
});

router.post("/:recipeId/edit", isRecipeOwner, async (req, res) => {
  const recipeData = req.body;

  try {
    await recipeServices.edit(req.params.recipeId, recipeData);

    res.redirect(`/recipes/${req.params.recipeId}/details`);
  } catch (err) {
    res.render("recipes/edit", { ...recipeData, error: getErrorMessage(err) });
  }
});

router.get("/:recipeId/delete", isRecipeOwner, async (req, res) => {
  await recipeServices.delete(req.params.recipeId);

  res.redirect("/recipes");
});

module.exports = router;
