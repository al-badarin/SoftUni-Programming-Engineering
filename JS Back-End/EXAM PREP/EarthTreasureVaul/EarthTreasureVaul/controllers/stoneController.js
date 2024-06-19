const { isAuth } = require("../middlewares/authMiddleware");
const { getErrorMessage } = require("../utils/errorUtils");

const stoneServices = require("../services/stoneServices");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("stones/dashboard");
});

module.exports = router;
