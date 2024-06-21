const { isAuth } = require("../middlewares/authMiddleware");
const { getErrorMessage } = require("../utils/errorUtils");
const volcanoServices = require("../services/volcanoServices");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const volcanoes = await volcanoServices.getAll().lean();

  res.render("volcanoes/catalog", { volcanoes });
});

router.get("/create", isAuth, (req, res) => {
  res.render("volcanoes/create");
});

router.post("/create", isAuth, async (req, res) => {
  const volcanoData = req.body;

  try {
    await volcanoServices.create(req.user._id, volcanoData);

    res.redirect("/volcanoes");
  } catch (err) {
    res.render("volcanoes/create", {
      ...volcanoData,
      error: getErrorMessage(err),
    });
  }
});

module.exports = router;
