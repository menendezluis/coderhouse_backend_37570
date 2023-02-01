// ES7
console.log("--------------------", "ES7", "--------------------");
console.log("Exponencial:", 3 ** 3);
console.log("Array includes:", [1, 2, 3].includes(1));

// ES8
console.log("--------------------", "ES8", "--------------------");
const foo = {
  nombre: "Lautaro",
  edad: 27,
};
console.log("object.entries:", Object.entries(foo));
console.log("object.values:", Object.values(foo));
console.log("object.keys:", Object.keys(foo));

// ES9
console.log("--------------------", "ES9", "--------------------");
let sum;
try {
  throw "ERROR!";
} catch (err) {
  sum = 0;
} finally {
  console.log("try catch finally", sum);
}

new Promise((resolve, reject) => resolve())
  .then()
  .finally(() => console.log("(ES9) Promise Finally"));

(function restFunc(first, second, ...args) {
  console.log("rest operator:", args);
})(1, 2, 3, 6, 7, 8, 9);

const numbers = [1, 2, 3];
(function sum(x, y, z) {
  console.log("spread syntax:", x + y + z);
})(...numbers);
console.log("spread syntax 2:", [0, ...numbers]);
console.log("spread syntax 3:", { ...numbers });
const dogObject = {
  patas: 4,
  ojos: 2,
};
console.log("spread syntax 4:", { ...dogObject, raza: "rottweiler", edad: 10 });

// ES10
console.log("--------------------", "ES10", "--------------------");
console.log("string trim:", "     Trimmed string      ".trim());
console.log("array flat:", [0, 1, 2, [3, 4]].flat());

// ES11
console.log("--------------------", "ES11", "--------------------");
console.log(false || "Valor por defecto");
console.log("nullish:", false ?? "Valor por defecto");
console.log("nullish:", null ?? "Valor por defecto");

class ClaseConCampoPrivado {
  static #campoPrivado = "este es un campo privado de la clase";
  static get _campoPrivado() {
    return this.#campoPrivado;
  }
}
// console.log(ClaseConCampoPrivado.#campoPrivado);
console.log(ClaseConCampoPrivado._campoPrivado);
