var http = require('http');
var map = require('through2-map');
var puerto = process.argv[2];

var server = http.createServer(function (req, res) {
    var peticion = req.pipe(map(function (chunk) {
      var str = chunk.toString();
      return str.toUpperCase();
    }));
    peticion.pipe(res);
});

server.listen(puerto);
