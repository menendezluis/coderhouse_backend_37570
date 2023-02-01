const { writeFile, appendFile, readFile, unlink } = require("fs");

const NOMBRE_ARCHIVO = "mejores_alumnos-callback.txt";

const mejoresAlumnos = `
Santiago Gonzales
Maria Malajovich
Jaquelina Talavera
Gunther Scherzer
Alejandra Huaiqueo
Facundo Rey
Tomas Fornica
Facundo Vandecaveye
`;

const mejoresAlumnosAppend = `
Lucas Kats
Camila Quiros
Santiago Ferreyra
Juan Jose Bascunan
Crustuab Stocco
Facundo Rey
`;

function callbackWriteFile(err) {
  if (err) throw err;
  console.log("archivo guardado!");
  appendFile(NOMBRE_ARCHIVO, mejoresAlumnosAppend, (err) => {
    if (err) throw err;
    console.log("archivo actualizado!");
    readFile(NOMBRE_ARCHIVO, "utf-8", (err, data) => {
      if (err) throw err;
      console.log(data);
      unlink(NOMBRE_ARCHIVO, (err) => {
        if (err) throw err;
        console.log("Archivo eliminado");
      });
    });
  });
}

writeFile(NOMBRE_ARCHIVO, mejoresAlumnos, callbackWriteFile);
