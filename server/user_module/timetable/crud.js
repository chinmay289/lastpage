module.exports= function(){

	// var appObject = params.appObject;
	var timeSlotModel = require('./schema.js')();
	// console.log(TimeSlotModel);

	var readTimeSlot = function(req, res, next){
		// req.crudMsg ="NOVAL";
		timeSlotModel.find().exec(function(err,result){
			req.params.TimeSlotDetails = result;
			console.log(result);
			next();
		});

		
	}

	var createTimeSlot = function(req, res, next){
		console.log(req.body);
		if(!req.params.permissionStatus){
			req.params.crudStatus = "err";
			next();
		}
		var record = new TimeSlotModel(
		{

			"subject": req.body.subject,
			"professor": req.body.professor,
			//"lectureDetails".startDatetime : req.body.startDatetime,
			// "lectureDetails".endDatetime : req.body.endDatetime,
			// "lectureDetails".startDatetime : req.body.endDatetime-req.body.startDatetime
			"status" : "okay"
		}
		);
		record.save(function(err){
			if(err){
				console.log('Error'+ err);
				req.params.crudStatus = "err";
			}
			else{
				console.log('Notice created');
				req.params.crudStatus = "success";
			}

			next();
		})
	}


	var updateTimeSlot = function(req, res, next){
		// console.log(req.params.permissionStatus);
		if(!req.params.permissionStatus){
			req.params.crudStatus = "err";
			next();
		}
		TimeSlotModel.findById(req.body._id).exec(function(err, results){
			results.subject = req.body.subject ? req.body.subject : results.subject;
			results.professor = req.body.professor ? req.body.professor : results.professor;
			results.lectureDetails.startDatetime = req.body.startDatetime ? req.body.startDatetime : results.lectureDetails.startDatetime;
			results.lectureDetails.endDatetime = req.body.endDatetime ? req.body.endDatetime : results.lectureDetails.endDatetime;
			results.lectureDetails.duration = req.body.endDatetime-req.body.startDatetime;
			results.posted.push(req.body.posted);

			results.save(function(err){
				if(err){
					console.log('Error'+err);
					req.params.crudStatus = "err";

				}
				else{
					console.log('TimeSlot updated');
					req.params.crudStatus = "success";

				}

							next();

			})				
			
		});
		
	}


	var deleteTimeSlot = function(req, res, next){

		TimeSlotModel.findOne({"_id":req.body._id}).exec(function(err, results){
			console.log(err);
			results.status = 'deleted';

			results.save(function(err){
				if(err){
					console.log('Error'+err);
					req.params.crudStatus = "err";

				}
				else{
					console.log('TimeSlot deleted');
					req.params.crudStatus = "success";

				}
				next();	
			});	

		
		});
		
	}


	var CRUD = { create: createTimeSlot, update:updateTimeSlot, read:readTimeSlot, delete: deleteTimeSlot};
	return CRUD;

};