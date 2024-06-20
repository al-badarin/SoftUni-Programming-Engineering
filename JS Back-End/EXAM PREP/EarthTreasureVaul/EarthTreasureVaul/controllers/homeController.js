const router = require("express").Router();
const stoneServices = require("../services/stoneServices");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/search", async (req, res) => {
  const query = req.query.q || "";
  const stones = await stoneServices.search(query).lean();
  res.render("search", { stones, query });
});

module.exports = router;
