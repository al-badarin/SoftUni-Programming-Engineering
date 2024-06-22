const volcanoServices = require("../services/volcanoServices");

async function isVolcanoOwner(req, res, next) {
  const volcano = await volcanoServices.getOne(req.params.volcanoId);

  if (volcano.owner._id.toString() !== req.user._id.toString()) {
    return res.redirect(`/volcanoes/${req.params.volcanoId}/details`);
  }

  next();
}

exports.isVolcanoOwner = isVolcanoOwner;
