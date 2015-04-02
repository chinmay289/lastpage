module.exports= function(){

	// var appObject = params.appObject;
	var pollingModel = require('./schema.js')();
	// console.log(pollingModel);

	var readPoll = function(req, res, next){
		// req.crudMsg ="NOVAL";
		pollingModel.find().exec(function(err,result){
			req.params.pollingDetails = result;
			console.log(result);
			next();
		});

		
	}

	var createPoll = function(req, res, next){
		console.log(req.body);
		if(!req.params.permissionStatus){
			req.params.crudStatus = "err";
			next();
		}
		var record = new pollingModel(
		{

			"title": req.body.title,
			"status" : "okay"
		}
		);
		record.save(function(err){
			if(err){
				console.log('Error'+ err);
				req.params.crudStatus = "err";
			}
			else{
				console.log('Poll created');
				req.params.crudStatus = "success";
			}

			next();
		})
	}


	var updatePoll = function(req, res, next){
		// console.log(req.params.permissionStatus);
		if(!req.params.permissionStatus){
			req.params.crudStatus = "err";
			next();
		}
		pollingModel.findById(req.body._id).exec(function(err, results){
			results.title = req.body.title ? req.body.title : results.title;
			results.posted.push(req.body.posted);

			results.save(function(err){
				if(err){
					console.log('Error'+err);
					req.params.crudStatus = "err";

				}
				else{
					console.log('Poll updated');
					req.params.crudStatus = "success";

				}

							next();

			})				
			
		});
		
	}


	var deletePoll = function(req, res, next){

		pollingModel.findOne({"_id":req.body._id}).exec(function(err, results){
			console.log(err);
			results.status = 'deleted';

			results.save(function(err){
				if(err){
					console.log('Error'+err);
					req.params.crudStatus = "err";

				}
				else{
					console.log('Poll deleted');
					req.params.crudStatus = "success";

				}
				next();	
			});	

		
		});
		
	}


	var CRUD = { create: createPoll, update:updatePoll, read:readPoll, delete: deletePoll};
	return CRUD;

};