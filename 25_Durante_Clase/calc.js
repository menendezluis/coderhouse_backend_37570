const argumentos = process.argv.slice(2);

const operacion = argumentos[0];
const num1 = Number(argumentos[1]);
const num2 = Number(argumentos[2]);

let resultado = 0;

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

switch (operacion) {
  case "suma":
    resultado = suma(num1, num2);
    break;
  case "resta":
    resultado = resta(num1, num2);
    break;
  case "multiplicacion":
    resultado = multiplicacion(num1, num2);
    break;
  case "division":
    resultado = division(num1, num2);
    break;
  default:
    resultado = "Operación no válida";
    break;
}

console.log(resultado);
