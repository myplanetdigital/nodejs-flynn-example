var http = require('http');
var os = require('os');
var port = process.env.PORT || 5000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Flynn on port '+port+' from container '+process.env.HOSTNAME+ ' on host ' + process.env.EXTERNAL_IP + ' with a TEST env varaible of ' + process.env.TEST + '\n');
}).listen(port, function() {
  console.log("Listening on " + port);
});
