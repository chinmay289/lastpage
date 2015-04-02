module.exports= function(){

	// var appObject = params.appObject;
	var examModel = require('./schema.js')();
	// console.log(examModel);

	var readExam = function(req, res, next){
		// req.crudMsg ="NOVAL";
		examModel.find().exec(function(err,result){
			req.params.examDetails = result;
			console.log(result);
			next();
		});

		
	}

	var createExam = function(req, res, next){
		console.log(req.body);
		if(!req.params.permissionStatus){
			req.params.crudStatus = "err";
			next();
		}
		var record = new examModel(
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
				console.log('Exam created');
				req.params.crudStatus = "success";
			}

			next();
		})
	}


	var updateExam = function(req, res, next){
		// console.log(req.params.permissionStatus);
		if(!req.params.permissionStatus){
			req.params.crudStatus = "err";
			next();
		}
		examModel.findById(req.body._id).exec(function(err, results){
			results.title = req.body.title ? req.body.title : results.title;
			results.body = req.body.body ? req.body.body : results.body;
			results.posted.push(req.body.posted);

			results.save(function(err){
				if(err){
					console.log('Error'+err);
					req.params.crudStatus = "err";

				}
				else{
					console.log('Exam updated');
					req.params.crudStatus = "success";

				}

							next();

			})				
			
		});
		
	}


	var deleteExam = function(req, res, next){

		examModel.findOne({"_id":req.body._id}).exec(function(err, results){
			console.log(err);
			results.status = 'deleted';

			results.save(function(err){
				if(err){
					console.log('Error'+err);
					req.params.crudStatus = "err";

				}
				else{
					console.log('Exam deleted');
					req.params.crudStatus = "success";

				}
				next();	
			});	

		
		});
		
	}


	var CRUD = { create: createExam, update:updateExam, read:readExam, delete: deleteExam};
	return CRUD;

};