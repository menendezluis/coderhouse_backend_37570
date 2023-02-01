const fs = require("fs");

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

fs.writeFileSync("mejores_alumnos-sync.txt", mejoresAlumnos);

const mejoresAlumnosAppend = `
Lucas Kats
Camila Quiros
Santiago Ferreyra
Juan Jose Bascunan
Crustuab Stocco
Facundo Rey
`;

fs.appendFileSync("mejores_alumnos-sync.txt", mejoresAlumnosAppend);

console.log(fs.readFileSync("mejores_alumnos-sync.txt", "utf-8"));

fs.unlinkSync("mejores_alumnos-sync.txt");

console.log(fs.existsSync("mejores_alumnos-sync.txt"));
