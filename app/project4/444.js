'use strict';

var winston = require('winston');

var logger = new (winston.Logger)({
	transports: [
		new (winston.transports.File)({
			level: 'debug',
			json: false,
			filename: './debug.log',
			handleExceptions: true
		}),
		new (winston.transports.Console)({
			level: 'debug',
			json: false,
			handleExceptions: true
		})
	],
	exitOnError: false
});

module.exports = logger;
