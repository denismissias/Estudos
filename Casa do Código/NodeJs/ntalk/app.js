'use strict';

var express = require('express');
var routes = require('./routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/usuarios', routes.user.index);

app.listen(3000, function () {
    console.log("Ntalk no ar");
});