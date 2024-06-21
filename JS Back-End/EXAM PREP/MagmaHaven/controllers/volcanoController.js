const { isAuth } = require("../middlewares/authMiddleware");
const { getErrorMessage } = require("../utils/errorUtils");
const volcanoServices = require("../services/volcanoServices");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const volcanoes = await volcanoServices.getAll().lean();

  res.render("volcanoes/catalog", { volcanoes });
});

module.exports = router;
