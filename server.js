var express = require('express');

var app = express();
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.use('/app', express.static(__dirname + '/app'));
app.use('/scripts', express.static(__dirname + '/app/scripts'));
app.use('/images', express.static(__dirname + '/app/images'));
app.use('/views', express.static(__dirname + '/app/views'));
app.use('/styles', express.static(__dirname + '/public/styles'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/', function(req, res){
	res.sendfile('app/index.html');
});


app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + port )
});
