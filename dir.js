var fs = require('fs');
var path = require('path');
var ruta = process.argv[2];
var directorio =  fs.readdir(ruta, function (err,lista) {
  if(err){
    throw err;
  }
  else{
    lista.forEach(function(archivo) {
      if(path.extname(archivo) === '.' + process.argv[3]){
        console.log(archivo);
      }
    });
  }
})
