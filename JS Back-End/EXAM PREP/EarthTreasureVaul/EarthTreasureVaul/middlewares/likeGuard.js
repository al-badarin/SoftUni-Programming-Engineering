const stoneServices = require("../services/stoneServices");

module.exports = async (req, res, next) => {
  const stone = await stoneServices.getOne(req.params.stoneId);

  if (!req.user) {
    return res.status(403).redirect("/auth/login");
  }

  if (stone.owner._id.toString() === req.user._id.toString()) {
    return res.status(403).send("Owners cannot like their own stones.");
  }

  if (stone.likedList.some(user => user._id.toString() === req.user._id.toString())) {
    return res.status(403).send('You have already liked this stone.');
}
  next();
};
