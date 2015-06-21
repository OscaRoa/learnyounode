var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function (socket) {
  var fecha = new Date();
  socket.end(strftime('%F %R', fecha) + '\n')
})

var puerto = process.argv[2];
server.listen(puerto);
