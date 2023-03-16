process.on("exit", (code) =>
  console.log(`El proceso terminó con el código ${code}`)
);
process.on("beforeExit", (code) =>
  console.log(`El proceso está por terminar con el código ${code}`)
);
process.on("message", (code) =>
  console.log(`El proceso recibió un mensaje ${code}`)
);

const errorCodeList = {
  1: "Error de sintaxis en el nombre del archivo o en los parámetros.",
  2: "El archivo especificado no se puede encontrar.",
  3: "No se puede encontrar la ruta especificada.",
  4: "No se puede acceder al archivo especificado.",
  "-4": "Proceso finalizado por argumentacion invalida",
};

const listNumbers = (...numbers) => {
  const arrayTypeOf = numbers.map((number) => typeof number);
  numbers.forEach((number) => {
    const typeNumber = typeof number;
    typeNumber != "number" &&
      process.on("exit", (code) => {
        console.log({ message: "Invalid Parameter", arrayTypeOf });
        return console.log(errorCodeList["-4"]);
      });
  });
};

listNumbers("a", 2, 3, 4, 5, false, 7, 8, 9, "b");
