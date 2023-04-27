import { cpus } from "os";
import cluster from "cluster";
import express from "express";
const numeroDeProcesadores = cpus().length;

console.log(numeroDeProcesadores);

console.log(`PID MASTER ${process.pid}`);

if (cluster.isPrimary) {
  console.log(`Proceso primario, generando proceso trabajador`);
  for (let i = 0; i < numeroDeProcesadores; i++) {
    cluster.fork();
  }
  //envia mensajes a los procesos hijos
  cluster.on("message", (worker, message) => {
    console.log(`Mensaje recibido del proceso ${worker.process.pid}`);
    console.log(message);
  });
} else {
  console.log(
    "Al ser un proceso forkeado, no cuento como primario, por lo tanto isPrimary me devuelve false"
  );
  console.log(`Me presento, soy un proceso worker con el id:  ${process.pid}`);
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
  //envia mensajes al proceso padre
  process.send({ message: "Hola soy un proceso worker" });
}
