var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var LocalStrategy = require('passport-local').Strategy;



var app = express();
var router = express.Router();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// var notice = require('./user_module/notice/');

app.mongoose = require('mongoose');
var userSchema = app.mongoose.Schema();
//mongodb connection
 app.mongoose.connect('mongodb://localhost/Air',function(err,res){
    if(!err){
        console.log('Database connected successfully');
    }
    else{
        console.log('Database connection failed');
    }
 });





app.passport = require('passport');
app.use(app.passport.initialize());
app.use(app.passport.session());
// app.use(session({ secret: 'chinmay' })); // session secret
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(router);
// routes.initialize(app);
// app.use('/users', users);
var routes = require('./routes')({appObject : app});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        // res.render('error', {
        //     message: err.message,
        //     error: err
        // });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    // res.render('error', {
    //     message: err.message,
    //     error: {}
    // });
conole.log(err);
    res.send('Err'+err);
});

app.use(router);
// routes.initialize(app);

module.exports = app;
