module.exports = function(){

	// var appObject = params.appObject;
	var mongoose = require('mongoose');
	var pollingSchema = mongoose.Schema(
		{
			title : String,
			pollingDetails : [{
								userId : Number,
								content : String, 
								voteTotalCount : Number
							}],
			votingDetails : [{
								votedUserId:Number,
								content:String,
								vote:Number
							}],
			posted : [{
						userId : Number,
						timeStamp:{
														type: Date,
														default: Date.now()
													},
						mode : String
					}],
			domainLevel : [{
								domainId : Number,
								domainCode: String
							}],
			status : String
		}

	);	

	return mongoose.model('Polling',pollingSchema);

}


