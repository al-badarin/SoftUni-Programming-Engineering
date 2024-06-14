const router = require("express").Router();

const authService = require("../services/authServices");

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  const userData = req.body;

  const token = await authService.register(userData);

  res.cookie("auth", token);
  res.redirect("/");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  const loginData = req.body;

  const token = await authService.login(loginData);

  res.cookie("auth", token);

  // TODO: double check the tasks for potential change of the redirecrt!
  res.redirect("/");
});

router.get("/logout", (req, res) => {
  res.clearCookie("auth");
  res.redirect("/");
});

module.exports = router;
