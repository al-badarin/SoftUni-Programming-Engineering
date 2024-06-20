const stoneServices = require("../services/stoneServices");

async function isStoneOwner(req, res, next) {
  const stone = await stoneServices.getOne(req.params.stoneId);

  if (stone.owner != req.user._id) {
    return res.redirect(`/stones/${req.params.stoneId}/details`);
  }

  next();
}

exports.isStoneOwner = isStoneOwner;
