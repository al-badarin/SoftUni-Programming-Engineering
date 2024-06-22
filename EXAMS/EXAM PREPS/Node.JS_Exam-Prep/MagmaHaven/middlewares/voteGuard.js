const volcanoServices = require('../services/volcanoServices')

module.exports = async (req,res,next) =>{
    const volcano = await volcanoServices.getOne(req.params.volcanoId)

    if (!req.user) {
        return res.status(403).redirect("/auth/login");
      }
    
      if (volcano.owner._id.toString() === req.user._id.toString()) {
        return res.status(403).send("Owners cannot vote for their own volcanoes.");
      }
    
      if (volcano.voteList.some(user => user._id.toString() === req.user._id.toString())) {
        return res.status(403).send('You have already voted for this volcano.');
    }
      next();
    }; 