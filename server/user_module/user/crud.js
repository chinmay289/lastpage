module.exports= function(){

	// var appObject = params.appObject;
	var userModel = require('./schema.js')();
	console.log(userModel);

	var findUser = function(req,res,next){
		User.find(exec(function(err, results){
		
			req.params.UserDetails = result;
			next();
		}));
	}

	var addUser = function(req,res,next){
		next();
	}


	var CRUD = {read: findUser, create: addUser};
	return CRUD;
}