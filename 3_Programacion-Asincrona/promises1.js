const dividir = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (divisor === 0) {
        reject("No se puede dividir por cero");
      } else {
        resolve(dividendo / divisor);
      }
    }, 3000);
  });
};

// dividir(6, 2).then(console.log).catch(console.error);

async function funcionAsincrona() {
  console.log("asdasdasdss");
  try {
    let resultado = await dividir(10, 5);
    console.log(resultado);
    console.log("been here funcionAsincrona");
  } catch (err) {
    console.log(err);
  }
}

funcionAsincrona();
console.log("been here final del archivo");
