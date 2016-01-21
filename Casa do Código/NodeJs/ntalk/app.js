'use strict';

var express = require('express');
var load = require('express-load');

var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

// view engine setup
app.use(cookieParser('ntalk'));
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

load('models')
.then('controllers')
.then('routes')
.into(app);

app.listen(3000, function () {
    console.log("Ntalk no ar");
});