const { isAuth } = require("../middlewares/authMiddleware");
const { getErrorMessage } = require("../utils/errorUtils");

const stoneServices = require("../services/stoneServices");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const stones = await stoneServices.getAll().lean();

  res.render("stones/dashboard", { stones });
});

router.get("/:stoneId/details", async (req, res) => {
  const stone = await stoneServices.getOne(req.params.stoneId).lean();

  const isOwner = stone.owner && stone.owner._id == req.user?._id;

  res.render("stones/details", { ...stone, isOwner });
});

router.get("/create", isAuth, (req, res) => {
  res.render("stones/create");
});

router.post("/create", isAuth, async (req, res) => {
  const stoneData = req.body;

  try {
    await stoneServices.create(req.user._id, stoneData);

    res.redirect("/stones");
  } catch (err) {
    res.render("stones/create", {
      ...stoneData,
      error: getErrorMessage(err),
    });
  }
});

module.exports = router;