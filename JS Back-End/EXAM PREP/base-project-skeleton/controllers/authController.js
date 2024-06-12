const router = require("express").Router();

const authService = require("../services/authServices");

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  const userData = req.body;

  await authService.register(userData);

  res.redirect("/auth/login");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  const loginData = req.body;

  await authService.login(loginData);
});

module.exports = router;
