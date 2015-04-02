module.exports = function(){

	// var appObject = params.appObject;
	var mongoose = require('mongoose');
	var assignmentSchema = mongoose.Schema(
				{
					subject: {subjectId:Number,Name:String},
					title: String,
					body : String,
					attachments : [
							{fileUrl:String},
							{fileUrl:String}
							],
					submission :[
									{
										userId:Number,
										timeStamp:Date,
										mode:String
									}],
					posted:[
								{
									userId:Number,
									timeStamp:{
								type: Date,
								default: Date.now()
							},
									mode:String
								}],
					domainLevel : [
								{
									domainId : Number,
									domainCode:String
								}],
					status : String
					
				}
			);	

	return mongoose.model('Assignment',assignmentSchema);

}




