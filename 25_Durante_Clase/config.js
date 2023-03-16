import dotenv from "dotenv";
import { Command } from "commander";


const program = new Command();

program.option("--mode <mode>", "Modo de ejecución", "development");
program.parse();

const argumentos = program.opts();
console.log("Remaining arguments: ", program.args);
dotenv.config({
  path:
    argumentos.mode.toUpperCase() === "PRODUCTION"
      ? ".env.production"
      : ".env.development",
});

const config = {
  PORT: process.env.PORT || 8080,
  USERNAME: process.env.USER_DB || null,
  PASSWORD: process.env.PASS_DB || null,
  DB_NAME: process.env.MONGO_URL || null,
};

export default config;
