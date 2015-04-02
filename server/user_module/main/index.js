var path = require('path');
var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;



mongoose.connect('mongodb://localhost/Air', function(err){
	if(err){
		console.log('Unable to connect to the database');
	}
	else{
		console.log('Connected to the database successfully');
	}
});

var userSchema = require('./schema');
