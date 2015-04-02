var actions = {};

actions.loginDone = function(req,res,next){
    req.jsonResponse = {
      "username(email)" : req.user.username,
      "user mongo_id" : req.user._id,
      "hash" : req.user.hash,
      "time now is " : new Date()
    };
    next();
};

actions.loginFailed = function(err){
  jsonResponse = {
      err : err
    };
    res.status(500).send(jsonResponse);
};

module.exports = actions;