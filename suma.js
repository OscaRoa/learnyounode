var suma = 0;
for(var i = 2; i < process.argv.length; i++){
  var elemento = Number(process.argv[i]);
  suma += elemento;
}
return console.log(suma);
