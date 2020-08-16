var express = require('express');
var exSession = require('express-session');
var bodyParser = require('body-parser');

var login 		= require('./controller/login');
var logout 		= require('./controller/logout');
var admin 		= require('./controller/admin');
var employee 		= require('./controller/employee');

var app 		= express();

//config
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret: ' ', saveUninitialized: true, resave: false}));
app.use(function(req, res, next)
{
  res.locals.type = req.session.type;
  res.locals.user = req.session.username;
  next();
});

//middleware
app.use('/login', login);
app.use('/logout', logout);
app.use('/admin', admin);
app.use('/employee', employee);


app.get('/', function(req, res)
{
	res.send("Go to >> <a href='/login'> LOGIN </a>");
});


app.listen(3333, function()
{
	console.log('Express HTTP Server\nStarted At Port: 3333');
});
