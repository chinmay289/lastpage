module.exports = function(params){
	var express = require('express');
	var router = express.Router();
	var appObject = params.appObject;
	

	var notice = require('./user_module/notice/routes')({appObject: appObject});
	var exam = require('./user_module/exam/routes')({appObject: appObject});
	var login = require('./user_module/login/routes')({appObject: appObject});
	var assignment = require('./user_module/assignment/routes')({appObject: appObject});
	var attendance = require('./user_module/attendance/routes')({appObject: appObject});
	var timetable = require('./user_module/timetable/routes')({appObject: appObject});
	var user = require('./user_module/user/routes')({appObject: appObject});




	router.get('/',function(req,res,next){
		var jsonResponse = {
			"title" : "Home page",
			"body" : "Welcome to home page"
		};
		res.send(jsonResponse);
	});

	// router.get('/login',function(req,res,next){
	// 	// res.sendFile('./user_module/login/login.html');
	// 	res.send('adfa');
	// });



	appObject.use('/',router);

	appObject.use('/notice',notice);
	appObject.use('/exam',exam);
	appObject.use('/assignment',assignment);
	appObject.use('/attendance', attendance);
	appObject.use('/login', login);
	appObject.use('/timetable', timetable);
	appObject.use('/user', user);


};