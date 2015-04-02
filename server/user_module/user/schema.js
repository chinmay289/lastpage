module.exports=function(){
	var mongoose = require('mongoose');
	var userSchema = mongoose.Schema(

	{
		name : {
				first:String, 
				last:String},
		email : [
				{email_address_1:String},
				{email_address_2:String}],
		userDetails : {
			location:String
		},
		mobile : Number,
		gender : String,
		role : String,
		perma_url: String,
		join_timestamp : Date,
		last_login_timestamp : Date,
		domain : [{domainId : Number,domainCode:String}],
		class: [{classId:Number,className:String,rollNumber:String}],
		status : String
	}
	);



	return mongoose.model('UserSchema',userSchema);
}