// const fs = require('fs');
// fs.promises.writeFile()

const fsPromises = require("fs/promises");

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

const NOMBRE_ARCHIVO = "mejores_estudiantes-promises.txt";

fsPromises
  .writeFile(NOMBRE_ARCHIVO, mejoresAlumnos)
  .then(() => {
    console.log("archivo escrito!");
    operacionesAsincronas();
  })
  .then(() => fsPromises.unlink(NOMBRE_ARCHIVO))
  .then(() => console.log('Proceso finalizado!'))
  .catch((err) => {
    console.log(err);
  });

async function operacionesAsincronas() {
  await fsPromises.appendFile(NOMBRE_ARCHIVO, mejoresAlumnosAppend);
  const contenido = await fsPromises.readFile(NOMBRE_ARCHIVO, "utf-8");
  console.log(contenido);
}
