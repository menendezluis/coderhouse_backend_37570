const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("El numero salio mayor a 0.5");
    } else {
      reject("El numero salio menor a 0.5");
    }
  }, 1000);
});

// const miPromesaDePromesa = miPromesa
//   .then(console.log)
//   .then(() => {
//     // let x = 1;
//     console.log("then del then");
//   })
//   .catch(console.log)
//   .then(() => {
//     console.log("then del catch");
//   })
//   .finally(() => {
//     console.log("Promise finally!");
//     // console.log(x);
//   });

// miPromesaDePromesa.then(() => {
//   console.log("then de miPromesaDePromesa!");
// });

const miPromesaDePromesaAsync = async function () {
  let x = 1;
  try {
    const result = await miPromesa;
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    console.log(x);
  }
};

miPromesaDePromesaAsync();
