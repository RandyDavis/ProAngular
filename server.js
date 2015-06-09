var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect();

var http = require('http');

app.use(serveStatic('../angularjs'));
app.listen(5000);

