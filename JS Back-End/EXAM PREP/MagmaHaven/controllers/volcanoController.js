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

router.get("/:volcanoId/details", async (req, res) => {
  const volcano = await volcanoServices.getOne(req.params.volcanoId).lean();

  const isOwner = volcano.owner && volcano.owner._id == req.user?._id;
  const isVoted = volcano.voteList.some((user) => user._id == req.user?._id);

  res.render("volcanoes/details", { ...volcano, isOwner, isVoted });
});

module.exports = router;
