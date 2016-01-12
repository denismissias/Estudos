'use strict';

var express = require('express');
var load = require('express-load');

var app = express();

// view engine setup
app.use(express.cookieParser('ntalk'));
app.use(express.session());
app.use(express.json());
app.use(express.urlencoded());
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