'use strict';

var session 	= require('express-session');
var MongoStore	= require('connect-mongo')(session);
var db 		    = require('../project3');
var config 		= require('../project2');

/**
 * Initialize Session
 * Uses MongoDB-based session store
 *
 */
var init = function () {
	if(process.env.NODE_ENV === 'production') {
		return session({
			secret: config.sessionSecret,
			resave: true,
			saveUninitialized: true,
			unset: 'destroy',
			store: new MongoStore({ mongooseConnection: db.Mongoose.connection })
		});
	} else {
		return session({
			secret: config.sessionSecret,
			resave: true,
			unset: 'destroy',
			saveUninitialized: true
		});
	}
}

module.exports = init();
