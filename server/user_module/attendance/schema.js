module.exports = function(){

	// var appObject = params.appObject;
	var mongoose = require('mongoose');
	var attendanceSchema = mongoose.Schema(
		{
			subject : String,
			professor : String,
			lectureDetails : {
							startDatetime : Date,
							endDatetime : Date,
							duration : Number
						},
			class : {classId:Number,className:String},
			Posted : [{userId:Number,timeStamp:{
								type: Date,
								default: Date.now()
							},mode:String}],
			domainLevel : [
						{
							domainId : Number,
							domainCode:String
						}],
			status : String
		}
	);	

	return mongoose.model('Attendance', attendanceSchema);

}