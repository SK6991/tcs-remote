'use strict';

var config 		= require('../project2');
var Mongoose 	= require('mongoose');
var logger 		= require('../project4');

Mongoose.connect('mongodb://localhost/data',function(err,db)
{
	if(err) throw err;
});
Mongoose.connection.on('error', function(err) {
	if(err) throw err;
});

Mongoose.Promise = global.Promise;

module.exports = { Mongoose,
	models: {
		user: require('./333/3331.js'),
		room: require('./333/3332.js')
	}
};
