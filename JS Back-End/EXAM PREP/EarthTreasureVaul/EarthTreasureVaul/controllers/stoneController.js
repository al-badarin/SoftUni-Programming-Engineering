const { isAuth } = require("../middlewares/authMiddleware");
const { getErrorMessage } = require("../utils/errorUtils");

const stoneServices = require("../services/stoneServices");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const stones = await stoneServices.getAll().lean();

  res.render("stones/dashboard", { stones });
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
