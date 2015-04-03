module.exports= function(){

	// var appObject = params.appObject;
	var noteModel = require('./schema.js')();
	// console.log(noteModel);

	var readNote = function(req, res, next){
		// req.crudMsg ="NOVAL";
		noteModel.find().exec(function(err,result){
			req.params.noteDetails = result;
			next();
			// console.log(result);
			// req.params.resultData = result;
			// next();
		});
	};

	var createNote = function(req, res, next){
		console.log(req.body);
		if(!req.params.permissionStatus){
			req.params.crudStatus = "err";
			next();
		}
		var record = new noteModel(
		{

			"title": req.body.title,
			"body": req.body.body,
			//"username":"Chinmay",
			"status" : "okay"
		}
		);
		record.save(function(err){
			if(err){
				console.log('Error'+ err);
				req.params.crudStatus = "err";
			}
			else{
				console.log('Note created');
				req.params.crudStatus = "success";
			}

			next();
		});
	};


	var updateNote = function(req, res, next){
		// console.log(req.params.permissionStatus);
		if(!req.params.permissionStatus){
			req.params.crudStatus = "err";
			next();
		}
		noteModel.findById(req.body._id).exec(function(err, results){
			results.title = req.body.title ? req.body.title : results.title;
			results.body = req.body.body ? req.body.body : results.body;
			results.posted.push(req.body.posted);

			results.save(function(err){
				if(err){
					console.log('Error'+err);
					req.params.crudStatus = "err";

				}
				else{
					console.log('Note updated');
					req.params.crudStatus = "success";

				}

							next();

			});

		});

	};


	var deleteNote = function(req, res, next){

		noteModel.findOne({"_id":req.body._id}).exec(function(err, results){
			console.log(err);
			results.status = 'deleted';

			results.save(function(err){
				if(err){
					console.log('Error'+err);
					req.params.crudStatus = "err";

				}
				else{
					console.log('Note deleted');
					req.params.crudStatus = "success";

				}
				next();
			});


		});

	};


	var CRUD = { create: createNote, update:updateNote, read:readNote, delete: deleteNote};
	return CRUD;

};