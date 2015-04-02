var userSchema = require('./schema');
var userCRUD = require('./crud');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){

	res.writeHead(200);
	res.write('Users page');
	res.end();

});

module.exports=router;