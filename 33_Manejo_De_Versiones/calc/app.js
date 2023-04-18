import express from "express";
import { operation } from "./utils.js";

const app = express();

app.use(express.json());

app.get("/:action", (req, res) => {
  const { action } = req.params;
  console.log(action);

  const { a, b } = req.query;
  console.log(a, b);

  if (a === undefined || b === undefined) {
    res.json({
      status: "error",
      payload: "Por favor ingrese los parámetros a y b",
    });
  }
  const result = operation(parseInt(a), parseInt(b), action);
  res.json({
    status: "success",
    payload: result,
  });
});

app.listen(3000, () => {
  console.log("Example app listening at http://localhost:3000");
});
