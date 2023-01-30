function suma(sumando1, sumando2) {
  return new Promise(function (resolve, reject) {
    if (sumando1 === 0 || sumando2 === 0) {
      return reject("No se puede sumar 0");
    }
    let resultado = sumando1 + sumando2;
    if (resultado <= 0) {
      return reject("La calculadora solo debe devolver valores positivos");
    }
    return resolve(resultado);
  });
}

const resta = (minuendo, sustraendo) =>
  new Promise((resolve, reject) => {
    if (minuendo === 0 || sustraendo === 0) {
      return reject("Operacion invalida");
    }
    let resultado = minuendo - sustraendo;
    if (resultado <= 0) {
      return reject("La calculadora solo debe devolver valores positivos");
    }
    resolve(resultado);
  });

// Multiplicacion
const multiplicacion = (numero1, numero2) =>
  new Promise((resolve, reject) => {
    if (numero1 <= 0 || numero2 <= 0) {
      reject("Ninguno de los valores puede ser negativo");
    }
    let resultado = numero1 * numero2;
    resolve(resultado);
  });

// Division
function division(dividendo, divisor) {
  return new Promise(function (resolve, reject) {
    if (divisor === 0) {
      reject("No se puede divir por 0");
    } else {
      let resultado = dividendo / divisor;
      if (resultado <= 0) {
        return reject("La calculadora solo debe devolver valores positivos");
      }
      return resolve(resultado);
    }
  });
}

async function calculos() {
  let res;
  try {
    // res = await multiplicacion(1, 2);
    console.log(res);
  } catch (error) {
    throw new Error(error);
  }
}

calculos();
