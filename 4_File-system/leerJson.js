const fs = require("fs");


const NOMBRE_ARCHIVO = "auto_de_facundo.json";
const autoDeFacundoString = fs.readFileSync(NOMBRE_ARCHIVO, "utf-8");

const autoDeFacundoObjeto = JSON.parse(autoDeFacundoString);
autoDeFacundoObjeto.anio = 2012;
autoDeFacundoObjeto.modelo = "Vento 2.5 hdi";

console.log(autoDeFacundoObjeto); 

fs.writeFileSync(NOMBRE_ARCHIVO, JSON.stringify(autoDeFacundoObjeto));
console.log(fs.readFileSync(NOMBRE_ARCHIVO, "utf-8"));