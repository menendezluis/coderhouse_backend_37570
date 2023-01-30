const obj = {};

function generarNumeros() {
  for (let i = 0; i < 10000; i++) {
    let numero = Math.round(Math.random() * (20 + 1));
    if (!obj.hasOwnProperty(numero)) {
      obj[numero] = 1;
    } else {
      obj[numero]++;
    }
  }
}

generarNumeros();
