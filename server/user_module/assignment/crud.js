module.exports= function(){

	// var appObject = params.appObject;
	var assignmentModel = require('./schema.js')();
	// console.log(assignmentModel);

	var readAssignment = function(req, res, next){
		// req.crudMsg ="NOVAL";
		assignmentModel.find().exec(function(err,result){
			req.params.assignmentDetails = result;
			console.log(result);
			next();
		});

		
	}

	var createAssignment = function(req, res, next){
		console.log(req.body);
		if(!req.params.permissionStatus){
			req.params.crudStatus = "err";
			next();
		}
		var record = new assignmentModel(
		{
			"subject": req.body.subject,
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
				console.log('Assignment created');
				req.params.crudStatus = "success";
			}

			next();
		})
	}


	var updateAssignment = function(req, res, next){
		// console.log(req.params.permissionStatus);
		if(!req.params.permissionStatus){
			req.params.crudStatus = "err";
			next();
		}
		assignmentModel.findById(req.body._id).exec(function(err, results){
			results.subject = req.body.subject ? req.body.subject : results.subject;
			results.title = req.body.title ? req.body.title : results.title;
			results.body = req.body.body ? req.body.body : results.body;
			results.posted.push(req.body.posted);

			results.save(function(err){
				if(err){
					console.log('Error'+err);
					req.params.crudStatus = "err";

				}
				else{
					console.log('Assignment updated');
					req.params.crudStatus = "success";

				}

							next();

			})				
			
		});
		
	}


	var deleteAssignment = function(req, res, next){

		assignmentModel.findOne({"_id":req.body._id}).exec(function(err, results){
			console.log(err);
			results.status = 'deleted';

			results.save(function(err){
				if(err){
					console.log('Error'+err);
					req.params.crudStatus = "err";

				}
				else{
					console.log('Assignment deleted');
					req.params.crudStatus = "success";

				}
				next();	
			});	

		
		});
		
	}


	var CRUD = { create: createAssignment, update:updateAssignment, read:readAssignment, delete: deleteAssignment};
	return CRUD;

};