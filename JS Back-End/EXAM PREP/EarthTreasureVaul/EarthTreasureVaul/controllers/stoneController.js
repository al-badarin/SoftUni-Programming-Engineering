const { isAuth } = require("../middlewares/authMiddleware");
const { getErrorMessage } = require("../utils/errorUtils");
const likeGuard  = require("../middlewares/likeGuard");
const { isStoneOwner } = require("../middlewares/stoneMiddlewares");

const stoneServices = require("../services/stoneServices");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const stones = await stoneServices.getAll().lean();

  res.render("stones/dashboard", { stones });
});

router.get("/:stoneId/details", async (req, res) => {
  const stone = await stoneServices.getOne(req.params.stoneId).lean();

  const isOwner = stone.owner && stone.owner._id == req.user?._id;
  const isLiked = stone.likedList.some((user) => user._id == req.user?._id);

  res.render("stones/details", { ...stone, isOwner, isLiked });
});

router.get("/:stoneId/like", likeGuard, async (req, res) => {
  await stoneServices.like(req.params.stoneId, req.user._id);

  res.redirect(`/stones/${req.params.stoneId}/details`);
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

router.get("/:stoneId/delete", isStoneOwner, async (req, res) => {
  await stoneServices.delete(req.params.stoneId);

  res.redirect("/stones");
});

module.exports = router;
