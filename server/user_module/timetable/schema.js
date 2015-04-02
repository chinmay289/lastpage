module.exports = function(){

	// var appObject = params.appObject;
	var mongoose = require('mongoose');
	var timeSlotSchema = mongoose.Schema(
		{
		subject : String,
		professor : String,
		lectureDetails : {startDatetime : Date,
							endDatetime : Date,
							duration: Number
						},
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

	return mongoose.model('TimeSlot',timeSlotSchema);

}