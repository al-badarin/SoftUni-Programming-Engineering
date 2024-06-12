const router = require("express").Router();

const authService = require("../services/authServices");

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  const userData = req.body;

  await authService.register(userData);
});

module.exports = router;
