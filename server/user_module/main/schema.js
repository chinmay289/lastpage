
module.exports = function(){
	// var appObject = params.appObject;
	var mongoose = require('mongoose');


	//Schema for User
	var userSchema = mongoose.Schema({
		name : [{first: String, last: String}],
		email : [{
					email_address_1:String ,
					email_address_2:String
				}],
		userDetails : [{
					location:String,
					mobile : Number
					}],
		gender : String,
		role : String,
		perma_url : String,
		join_timestamp : Date,
		last_login_timestamp : Date,
		domain : [{
					domainId : Number,
					domainCode: String
				}],
		class : [{
					classId	: Number,
					className : String,
					rollNo : Number
				}],
		status : String

	});
	var schema = {userSchema : userSchema};
	return schema;
};