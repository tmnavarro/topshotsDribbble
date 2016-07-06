var express = require('express');

var app = express();

app.use('/app', express.static(__dirname + '/app'));
app.use('/scripts', express.static(__dirname + '/app/scripts'));
app.use('/images', express.static(__dirname + '/app/images'));
app.use('/views', express.static(__dirname + '/app/views'));
app.use('/styles', express.static(__dirname + '/public/styles'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/', function(req, res){
	res.sendfile('app/index.html');
});

app.listen(process.env.PORT || 5000);
