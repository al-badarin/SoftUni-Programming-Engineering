const { isAuth } = require("../middlewares/authMiddleware");
const { getErrorMessage } = require("../utils/errorUtils");

const stoneServices = require("../services/stoneServices");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("stones/dashboard");
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
