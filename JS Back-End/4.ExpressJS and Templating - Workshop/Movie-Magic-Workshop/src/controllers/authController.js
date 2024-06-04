const router = require("express").Router();

const authService = require("../services/authService");

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  const userData = req.body;

  try {
    await authService.register(userData);
    res.redirect("/auth/login");
  } catch (error) {
    console.error("Error during registration:", error.message);
    res.status(500).send("Registration failed");
  }
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await authService.login(email, password);
    console.log(token);
    res.redirect("/");
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(401).send("Login failed: " + error.message);
  }
});

module.exports = router;
