const router = require("express").Router();
const volcanoServices = require("../services/volcanoServices");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/search", async (req, res) => {
  const searchString = req.query.q || "";
  const type = req.query.type || "";

  const volcanoes = await volcanoServices.search(searchString, type).lean();

  res.render("search", { volcanoes, searchString, selectedType: type });
});

module.exports = router;
