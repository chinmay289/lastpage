module.exports = function(){
	var express = require('express');
	var permissionObject = require('../shared/permissions')();
	var router = express.Router();

	var crudObject = require('./crud')();

	router.get('/',function(req,res,next){
		console.log('User module');
		res.json('User module');
	})

	router.get('/fetch', crudObject.read,function(req, res, next){
		console.log('Read');
		res.send(req.params.UserDetails);


	})

	return router;
}