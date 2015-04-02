/**
*
* Add this line to app.js

var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

*
**/

/*==========  Install this npms : passport, passport-local,passport-local-mongoose,bcrypt-nodejs   ==========*/


var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose'),
    bcrypt = require('bcrypt-nodejs');

var Account = new Schema({
    username: String,
    password: String
});

Account.plugin(passportLocalMongoose);

var Account = mongoose.model('Account', Account);
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
passport.accountObj = Account;
module.exports = passport;