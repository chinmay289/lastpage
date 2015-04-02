module.exports= function(){

	// var appObject = params.appObject;
	var attendanceModel = require('./schema.js')();
	// console.log(attendanceModel);

	var readAttendance = function(req, res, next){
		// req.crudMsg ="NOVAL";
		attendanceModel.find().exec(function(err,result){
			req.params.attendanceDetails = result;
			console.log(result);
			next();
		});

		
	}

	var createAttendance = function(req, res, next){
		console.log(req.body);
		if(!req.params.permissionStatus){
			req.params.crudStatus = "err";
			next();
		}
		var record = new attendanceModel(
		{

			"title": req.body.title,
			"body": req.body.body,
			"status" : "okay"
		}
		);
		record.save(function(err){
			if(err){
				console.log('Error'+ err);
				req.params.crudStatus = "err";
			}
			else{
				console.log('Attendance created');
				req.params.crudStatus = "success";
			}

			next();
		})
	}


	var updateAttendance = function(req, res, next){
		// console.log(req.params.permissionStatus);
		if(!req.params.permissionStatus){
			req.params.crudStatus = "err";
			next();
		}
		attendanceModel.findById(req.body._id).exec(function(err, results){
			results.title = req.body.title ? req.body.title : results.title;
			results.body = req.body.body ? req.body.body : results.body;
			results.posted.push(req.body.posted);

			results.save(function(err){
				if(err){
					console.log('Error'+err);
					req.params.crudStatus = "err";

				}
				else{
					console.log('Attendance updated');
					req.params.crudStatus = "success";

				}

							next();

			})				
			
		});
		
	}


	var deleteAttendance = function(req, res, next){

		attendanceModel.findOne({"_id":req.body._id}).exec(function(err, results){
			console.log(err);
			results.status = 'deleted';

			results.save(function(err){
				if(err){
					console.log('Error'+err);
					req.params.crudStatus = "err";

				}
				else{
					console.log('Attendance deleted');
					req.params.crudStatus = "success";

				}
				next();	
			});	

		
		});
		
	}


	var CRUD = { create: createAttendance, update:updateAttendance, read:readAttendance, delete: deleteAttendance};
	return CRUD;

};