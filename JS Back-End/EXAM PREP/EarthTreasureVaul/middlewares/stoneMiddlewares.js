const stoneServices = require("../services/stoneServices");

async function isStoneOwner(req, res, next) {
  const stone = await stoneServices.getOne(req.params.stoneId);

  if (stone.owner._id.toString() !== req.user._id.toString()) {
    return res.redirect(`/stones/${req.params.stoneId}/details`);
  }

  next();
}

exports.isStoneOwner = isStoneOwner;
