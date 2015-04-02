module.exports = function(params) {

  var express = require('express');
  var router = express.Router();
  var passport = require('./passportConfig');
  var Account = passport.accountObj;

  var loginActions = require('./index.js')

  var appObject = params.appObject;
// console.log(passport);
  router.post('/', passport.authenticate('local'), loginActions.loginDone, function(req, res) {
    res.send(req.jsonResponse);
    // I want to do nothing here !
  });

  router.post('/register', function(req, res) {
      Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
          if (err) {
            return res.send("Sorry. That username already exists. Try again.");
          }

          passport.authenticate('local')(req, res, function () {
            jsonResponse = {
                "username(email)" : req.user.username,
                "user mongo_id" : req.user._id,
                "hash" : req.user.hash,
                "time now is " : new Date()
              };
              res.send(jsonResponse);
          });
      });
  });
  return router;

};