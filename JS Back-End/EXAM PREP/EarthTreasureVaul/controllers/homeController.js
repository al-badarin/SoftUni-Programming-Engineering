const router = require("express").Router();
const stoneServices = require("../services/stoneServices");

router.get("/", async (req, res) => {
  const latestStones = await stoneServices.getLatest().lean();

  res.render("home", { latestStones });
});

router.get("/search", async (req, res) => {
  const query = req.query.q || "";
  const stones = await stoneServices.search(query).lean();
  res.render("search", { stones, query });
});

module.exports = router;
