const router = require("express").Router();
const courseService = require("../services/courseService");
const userService = require("../services/userService");

const { isAuth } = require("../middlewares/authMiddleware");

router.get("/", async (req, res) => {
  const latestCourses = await courseService.getLatest().lean();

  res.render("home", { latestCourses });
});

router.get("/profile", isAuth, async (req, res) => {
  const user = await userService.getInfo(req.user._id).lean();

  const createdCoursesCount = user.createdCourses?.length || 0;
  const signedUpCoursesCount = user.signedUpCourses?.length || 0;

  res.render("profile", { user, createdCoursesCount, signedUpCoursesCount });
});

module.exports = router;
