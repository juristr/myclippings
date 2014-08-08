var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


var app = express();

app.set('port', process.env.PORT || 3000);

//app.use(express.favicon());
// app.use(express.logger({
//      format: 'tiny',
//      stream: fs.createWriteStream('app.log', {'flags': 'w'})
// }));

app.use(express.static(__dirname + '/../client'));
// app.use(express.urlencoded());
app.use(bodyParser());
app.use(methodOverride());
// app.use(express.responseTime());
// Add the errorHander middleware
//app.use(express.errorHandler());
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.json({
    message: err.message,
    stack: err.stack
  })
});


app.get('/api/ping', function(req, res){
  res.send('pong');
});

var fs = require('fs'),
    kindleImporter = require('./kindleImporter');

app.get('/api/clippings', function(req, res){

  fs.readFile(__dirname + '/myclippings.txt', 'utf8', function(err, data) {
      if (err)
        throw err;

      var resultBooks = kindleImporter.parse(data);

      res.send(resultBooks);

    });

});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});