const sumar = (...numeros) => {
  if (numeros.length === 0) return 0;
  if (!numeros.every((numero) => typeof numero === "number")) return null;
  return numeros.reduce((a, b) => a + b);
};
const sumardos = (...numeros) => {
  let resultado = 0;
  if (numeros.length === 0) return 0;
  for (let i = 0; i < numeros.length; i++) {
    if (typeof numeros[i] !== "number") {
      return null;
    }
    resultado += numeros[i];
  }
  return resultado;
};
const sumarCopy = () => {};

/*
La función debe devolver null si algún parámetro no es numérico.
La función debe devolver 0 si no se pasó ningún parámetro
La función debe poder realizar la suma correctamente. 
La función debe poder hacer la suma con cualquier cantidad de números.
*/
let testPasados = 0;
//La función debe devolver null si algún parámetro no es numérico.

console.log(
  "Test 1: La funcion debe devolver null si algun parametro no es un numero"
);
let resultTest1 = sumar("2", 2);
if (resultTest1 === null) {
  console.log("Test 1: CORRECTO");
  testPasados++;
} else {
  console.log(
    "Test 1: INCORRECTO" +
      " se recibio: " +
      typeof resultTest1 +
      " se esperaba: null"
  );
}

//La función debe devolver 0 si no se pasó ningún parámetro
console.log(
  "Test 2: La funcion debe devolver 0 si no se paso ningun parametro"
);
let resultTest2 = sumar();
if (resultTest2 === 0) {
  console.log("Test 2: CORRECTO");
  testPasados++;
} else {
  console.log(
    "Test 2: INCORRECTO" +
      " se recibio: " +
      typeof resultTest2 +
      " se esperaba: 0"
  );
}
//La función debe poder realizar la suma correctamente.
console.log("Test 3: La funcion debe poder realizar la suma correctamente");
let resultTest3 = sumar(2, 3);
if (resultTest3 === 5) {
  console.log("Test 3: CORRECTO");
  testPasados++;
} else {
  console.log(
    "Test 3: INCORRECTO" + " se recibio: " + resultTest3 + " se esperaba: 5"
  );
}

//La función debe poder hacer la suma con cualquier cantidad de números.
console.log(
  "Test 4: La funcion debe poder hacer la suma con cualquier cantidad de numeros"
);
let resultTest4 = sumar(10, 10, 11, 11, 10);
if (resultTest4 === 52) {
  console.log("Test 4: CORRECTO");
  testPasados++;
} else {
  console.log(
    "Test 4: INCORRECTO" + " se recibio: " + resultTest4 + " se esperaba: 52"
  );
}
