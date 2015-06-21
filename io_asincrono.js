var fs = require('fs');
var datos = fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if (err){
    throw err;
  }
  else
  var numeroDeSaltos = data.split("\n");
  console.log(numeroDeSaltos.length - 1);
})
