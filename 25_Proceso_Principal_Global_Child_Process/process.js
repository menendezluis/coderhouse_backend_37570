import { Command } from "commander";
import config from "./config.js";

/*const program = new Command();

program
  .option("-d", "Variable pa   ra debug", false)
  .option("-p, --port <port>", "Puerto del servidor", 8080)
  .option("--mode <mode>", "Modo de ejecucion", "production")
  .requiredOption(
    "-u <user>",
    "Usuario utilizado",
    "No se ha declarado un usuario"
  )
  .option("-length, --letters [letters...]", "especifique las letras");

program.parse();

//console.log("Options", program.opts());
//console.log("remaining arguments", program.args);
//console.log(config);
/*let myString = "1 2 3";

let myArray = myString.split(" ");

console.log(process.argv.slice(2));
//console.log(myArray);
*/
//console.log(config);
const errorCodeList = {
  1: "Error de sintaxis en el nombre del archivo o en los parámetros.",
  2: "El archivo especificado no se puede encontrar.",
  3: "No se puede encontrar la ruta especificada.",
  4: "No se puede acceder al archivo especificado.",
  "-4": "Proceso finalizado por argumentacion invalida",
};

const listNumbers = (...numbers) => {
  numbers.forEach((number) => {
    const typeNumber = typeof number;
    typeNumber != "number" &&
      process.on("exit", function () {
        return console.log(errorCodeList["3"]);
      });
  });
};

listNumbers(1, 2, "a", 4, true, 6, 7, 8, 9, 10);
