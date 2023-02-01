const baseDeDatos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function consultarBaseDeDatos(numero, callback) {
  setTimeout(() => {
    const exists = baseDeDatos.some(num => num === numero);
    if (!!exists) {
      callback(null, true);
    } else {
      callback("El numero " + numero + "no esta cargado");
    }
  }, 1000);
}
console.log("Inicio!");
function miCallback(error, value) {
  if (error) {
    throw new Error(error);
  }
  console.log("Numero encontrado con exito!");
}
console.log(consultarBaseDeDatos(10, miCallback));