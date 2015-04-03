module.exports= function(params){

	var appObject = params.appObject;
	var userSchema = require('./schema.js')();
	console.log(userSchema);

	// var findUser = function(req,res,next){
	// 	User.find(exec(function(err, results){
	// 		if(err){
	// 			console.log('Error: '+err);
	// 		}
	// 		else{
	// 			req.params.UserDetails = result;
	// 			console.log(result);
	// 			next();
	// 		}
	// 	}));
	// }

	// var addUser = function(req,res,next){
	// 	User
	// }


	// var CRUD = {read: findUser, create: addUser};
	// return CRUD;
};