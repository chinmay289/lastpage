module.exports = function(){

	var express = require('express');
	var permissionObject = require('../shared/permissions')();
	var router = express.Router();

	var crudObject = require('./crud')();

	router.get('/',function(req,res,next){
		jsonResponse = {
				'body':'Hello this is timetable page',
				'title': 'Hello!',
				"status" : "Publish"
				}
		res.send(jsonResponse);
		console.log(jsonResponse);
	});

	router.post('/create',function(req,res,next){req.params.moduleCode=1;req.user={}; req.user.userId=0;next();},permissionObject.canCreate, crudObject.create, function(req, res, next){
		if(req.params.crudStatus === "success"){
			res.send('TimeSlot created');
		}
		else{
			res.send('Error');
		}
	});

	router.post('/update',function(req,res,next){req.params.moduleCode=1;req.user={}; req.user.userId=0;next();},permissionObject.canUpdate, crudObject.update, function(req, res, next) {
		console.log(req.params.crudStatus);
		if(req.params.crudStatus === "success"){
			res.send('TimeSlot updated');
		}
		else{
			res.send('Error');
		}

 	});

 	router.post('/delete', crudObject.delete, function(req, res, next) {
		if(req.params.crudStatus === "success"){
			res.send('TimeSlot deleted');
		}
		else{
			res.send('Error');
		}

 	});

	router.get('/create', function(req,res,next){
		res.status(500).send('Use POST');
		console.log('Use POST');
	});

	return router;

};