import express from "express";
import { addLogger } from "./utils/logger.js";

const app = express();

app.use(addLogger);

app.get("/", (req, res) => {
  req.logger.warning("Prueba de alerta");

  res.send({ message: "Prueba de logger" });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

/*
import express from "express";
import { addLogger } from "./utils/logger.js";

const app = express();

app.use(addLogger);

app.get("/", (req, res) => {
  req.logger.warn("Prueba de alerta");
  res.send({ message: "Prueba de logger" });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

*/
