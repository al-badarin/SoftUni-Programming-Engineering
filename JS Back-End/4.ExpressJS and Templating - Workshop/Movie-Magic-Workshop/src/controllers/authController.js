const router = require("express").Router();

const User = require("../models/User");
const authService = require("../services/authService");
const { getErrorMessage, validate } = require("../utils/errorUtils");

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", validate(User), async (req, res) => {
  const userData = req.body;

  try {
    await authService.register(userData);
    res.redirect("/auth/login");
  } catch (error) {
    console.error("Error during registration:", error.message);

    const message = getErrorMessage(error);

    res.render("auth/register", { ...userData, error: message });
  }
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await authService.login(email, password);
    res.cookie("auth", token);
    res.redirect("/");
  } catch (error) {
    console.error("Error during login:", error.message);

    const message = getErrorMessage(error);

    res.status(401).render("auth/login", { error: message });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("auth");

  res.redirect("/");
});

module.exports = router;
