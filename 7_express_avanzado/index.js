const express = require("express");
const app = express();

// Backend de la pareja Gabriel
let compras = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Metodos: GET, POST, PUT, DELETE
app.get("/menu", (req, res) => {
  res.send("Milanesa napolitana");
});
app.post("/compras", (req, res) => {
  const _compras = req.body;
  if (_compras.length) {
    compras = _compras;
    return res.send("ok");
  }
  res.status(400).send("Bad request");
});
app.get("/compras", (req, res) => {
  res.send(compras);
});
app.put("/compras/:id", (req, res) => {
  compraId = compras.findIndex((c) => c.id === +req.params.id);
  compras[compraId] = {
    id: req.params.id,
    nombre: req.body.nombre,
  };
  res.send("producto actualizado!");
});
app.delete("/compras/:id", (req, res) => {
  compras = compras.filter((c) => c.id !== +req.params.id);
  res.send("Producto eliminado");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
