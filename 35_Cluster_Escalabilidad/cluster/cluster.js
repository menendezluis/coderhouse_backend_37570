import cluster from "cluster";

//console.log(`PID MASTER ${process.pid}`);

//console.log(`Is cluster primary? ${cluster.isPrimary}`);

if (cluster.isPrimary) {
  cluster.fork();
  console.log(`Proceso primario, generando proceso trabajador`);
} else {
  console.log(
    "Al ser un proceso forkeado, no cuento como primario, por lo tanto isPrimary me devuelve false"
  );
}
