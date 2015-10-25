var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();
var content = fs.readFileSync("index.html", 'utf8');
// app.use("/static", express.static(path.join(__dirname, 'static')));
app.use("/static", express.static('static'));

app.get('/', function (req, res) {
  res.send(content);
});

app.post('/static/quiz.json', function(req, res){
	var obj = {};
	console.log('body: ' + JSON.stringify(req.body));
	res.send(req.body);
});

var server = app.listen(process.env.PORT || 4000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});