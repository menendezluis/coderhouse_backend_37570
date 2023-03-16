import * as dotenv from "dotenv";
import { Command } from "commander";

const program = new Command();
program.option("--mode <mode>", "Modo de ejecucion", "production");
program.parse();

//.log("Options", program.opts());

//console.log(program.opts());
const environment = program.opts()?.mode || "development";
//console.log(environment === "development");
dotenv.config({
  path: environment === "development" ? ".env.dev" : ".env.production",
});

export default {
  USER_MONGO: process.env.USER_MONGO,
  PASS_MONGO: process.env.PASS_MONGO,
  DB_MONGO: process.env.DB_MONGO,
  PORT: process.env.PORT,
};
