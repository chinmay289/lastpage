module.exports = function(params){

	var express = require('express');
	var permissionObject = require('../shared/permissions')();
	var router = express.Router();
	var appObject = (params.appObject);
	// console.log(appObject);
	var crudObject = require('./crud')({appObject:appObject});
	console.log(crudObject.read);

	router.get('/fetch', crudObject.read ,function(req, res){
		console.log('Read');
		res.json(req.params.UserDetails);
	});


	// router.get('/fetch', crudObject.read ,function(req, res, next){
	// 	console.log('Read');
	// 	// res.json(req.params.UserDetails);

	// });

	router.get('/',function(req,res,next){
		console.log('User module');
		res.json('User module');
	});

	return router;
}