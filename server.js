var express 	= require('express');
var app  		= express();
var path 		= require('path');
var bodyParser 	= require('body-parser');
var flash 		= require('connect-flash');
var routes 		= require('./app/project6');
var session 	= require('./app/project7');
var passport    = require('./app/project1');
var ioServer 	= require('./app/project8')(app);
var crypt 		= require('./app/project4');
var port = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use('/', routes);
app.use(function(req, res, next) {
  res.status(404).sendFile(process.cwd() + '/app/views/9991');
});

ioServer.listen(port);
