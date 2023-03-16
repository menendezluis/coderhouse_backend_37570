import express from "express";
import fork from "child_process";

const app = express();

function sumar() {
  let valor = 0;
  for (let i = 0; i < 5e9; i++) {
    valor += i;
  }
  return valor;
}
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sumar", (req, res) => {
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

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
