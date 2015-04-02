var app = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

var app = express();
app.set('port', process.env.PORT || 1337);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', { layout: false });
app.use(express.logger());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);

mongoose.connect('mongodb://localhost/amg',function(err){
	if(err){
		console.log('Unable to connect to the database');
	}
	else{
		console.log('Connected to the database successfully');
	}
});

var Schema = mongoose.Schema;
var UserDetail = new Schema({
      email: String,
      password: String,
      salt: String,
      hash: String
    });