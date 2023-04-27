import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/operacionsencilla", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }
  res.send({ message: "Operación sencilla", result: sum });
});

app.get("/operacioncompleja", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 5e8; i++) {
    sum += i;
  }
  res.send({ message: "Operación compleja", result: sum });
});

app.listen(PORT, () => {
  console.log("Server listening on port" + PORT);
});
