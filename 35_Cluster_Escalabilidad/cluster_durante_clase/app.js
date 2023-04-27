import { cpus } from "os";
import cluster from "cluster";
import express from "express";

const numeroDeProcesadores = cpus().length;
console.log(numeroDeProcesadores);

if (cluster.isPrimary) {
  console.log(`Proceso primario, generando proceso trabajador`);
  for (let i = 0; i < numeroDeProcesadores; i++) {
    cluster.fork();
  }
} else {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.get("/", (req, res) => {
    res.send({
      status: "success",
      message: "Petición atendida por un proceso worker",
      process: process.pid,
    });
  });

  app.listen(PORT, () => {
    console.log("Server listening on port" + PORT);
  });
}
