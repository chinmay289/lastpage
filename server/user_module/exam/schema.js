module.exports = function(){

	// var appObject = params.appObject;
	var mongoose = require('mongoose');
	var examSchema = mongoose.Schema(
		{
			title : String,
			subject: {
						Id:Number,
						Name:String
					},
			posted : [{
						userId:Number,
						timeStamp:{
								type: Date,
								default: Date.now()
							},
						mode:String
					}],
			examDate : [{
						userId:Number,
						timeStamp:Date,
						mode:String
					}],
			marks : {	
						maxMarks:Number, 
						passingMarks:Number
					},
			results :
					[{
						userId : Number, 
						Marks : Number, 
						Perct : Number, 
						UpdateBy: [{
									userId:Number,
									timeStamp:Date,
									mode:String
								}]
					}],
			
			domainLevel : [{
							domainId : Number,
							domainCode:String
						}],
			status : String

		}

	);	

	return mongoose.model('Exam',examSchema);

}


