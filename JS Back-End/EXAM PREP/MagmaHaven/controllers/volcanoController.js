const { isAuth } = require("../middlewares/authMiddleware");
const { getErrorMessage } = require("../utils/errorUtils");
const volcanoServices = require("../services/volcanoServices");

const voteGuard = require("../middlewares/voteGuard");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const volcanoes = await volcanoServices.getAll().lean();

  res.render("volcanoes/catalog", { volcanoes });
});

router.get("/:volcanoId/details", async (req, res) => {
  const volcano = await volcanoServices.getOne(req.params.volcanoId).lean();

  const isOwner = volcano.owner && volcano.owner._id == req.user?._id;
  const isVoted = volcano.voteList.some((user) => user._id == req.user?._id);

  res.render("volcanoes/details", { ...volcano, isOwner, isVoted });
});

router.get("/:volcanoId/vote", voteGuard, async (req, res) => {
  await volcanoServices.vote(req.params.volcanoId, req.user._id);

  res.redirect(`/volcanoes/${req.params.volcanoId}/details`);
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

router.get("/:volcanoId/edit", async (req, res) => {
  const volcano = await volcanoServices.getOne(req.params.volcanoId).lean();

  res.render("volcanoes/edit", { ...volcano });
});

router.post("/:volcanoId/edit", async (req, res) => {
  const volcanoData = req.body;

  try {
    await volcanoServices.edit(req.params.volcanoId, volcanoData);

    res.redirect(`/volcanoes/${req.params.volcanoId}/details`);
  } catch (err) {
    res.render("volcanoes/edit", {
      ...volcanoData,
      error: getErrorMessage(err),
    });
  }
});

//TODO: *edit / *delete / *add isVolcanoOwner / *search

module.exports = router;
