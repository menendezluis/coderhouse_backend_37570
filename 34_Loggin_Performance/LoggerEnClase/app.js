import express from "express";
import { addLogger } from "./utils/logger.js";

const app = express();

app.use(addLogger);

app.get("/", (req, res) => {
  req.logger.warn("Prueba de alerta");
  req.logger.error("Prueba de info");
  req.logger.info("Prueba de info");
  req.logger.debug("Prueba de debug");
  req.logger.silly("Prueba de silly");
  req.logger.http("Prueba de http");
  req.logger.verbose("Prueba de verbose");

  res.send({ message: "Prueba de logger!!" });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
