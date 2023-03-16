import * as dotenv from "dotenv";

const environment = process.argv.slice(2)[0] || "development";
//console.log(environment === "development");
dotenv.config({
  path: environment === "development" ? ".env.dev" : ".env.production",
});

//console.log(process.env);

export default {
  USER_MONGO: process.env.USER_MONGO,
  PASS_MONGO: process.env.PASS_MONGO,
  DB_MONGO: process.env.DB_MONGO,
  PORT: process.env.PORT,
};
