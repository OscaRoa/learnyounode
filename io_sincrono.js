var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var string = buf.toString();
var numeroDeSaltos = string.split("\n");
console.log(numeroDeSaltos.length-1);
