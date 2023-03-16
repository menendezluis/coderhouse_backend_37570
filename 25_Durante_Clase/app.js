import express from "express";
import fork from "child_process";

const app = express();

let contador = 0;
function sumar() {
  let valor = 0;
  for (let i = 0; i < 5e9; i++) {
    valor += i;
  }
  return valor;
}
app.get("/", (req, res) => {
  contador++;
  res.send("Eres el visitante número " + contador);
});

app.get("/sumar-bloqueante", (req, res) => {
  const resultado = sumar();
  res.send(`El resultado es ${resultado}`);
});
app.get("/sumar-nobloc", (req, res) => {
  const child = fork.fork("./sumar.js");
  child.send("Inicia el proceso");
  child.on("message", (result) => {
    res.send(`El resultado es ${result}`);
  });
});

app.get("/calculo-bloq", (req, res) => {
  const resultado = sumar();
  res.send(`El resultado es ${resultado}`);
});
app.get("/calculo-nobloc", (req, res) => {
  const child = fork.fork("./sumar.js");
  child.send("Inicia el proceso");
  child.on("message", (result) => {
    res.send(`El resultado es ${result}`);
  });
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
