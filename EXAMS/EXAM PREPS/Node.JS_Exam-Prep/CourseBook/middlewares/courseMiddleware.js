const courseService = require("../services/courseService");

async function isCourseOwner(req, res, next) {
  const course = await courseService.getOne(req.params.courseId);

  if (course.owner._id.toString() !== req.user._id.toString()) {
    return res.redirect(`/courses/${req.params.courseId}/details`);
  }

  // req.course = course

  next();
}

exports.isCourseOwner = isCourseOwner;
