const express = require("express");
const routerCompras = express.Router();
let { compras } = require("./database");
const middlewares = require("./middlewares");
const multer = require("multer");

routerCompras.use(middlewares.compras);

routerCompras.get("/menu", (req, res) => {
  res.send("Milanesa napolitana");
});
routerCompras.post("", (req, res) => {
  const _compras = req.body;
  if (_compras.length) {
    compras = _compras;
    return res.send("ok");
  }
  res.status(400).send("Bad request");
});
routerCompras.get("", (req, res) => {
  res.send(compras);
});
routerCompras.put("/:id", (req, res) => {
  compraId = compras.findIndex((c) => c.id === +req.params.id);
  compras[compraId] = {
    id: req.params.id,
    nombre: req.body.nombre,
  };
  res.send("producto actualizado!");
});
routerCompras.delete("/:id", (req, res) => {
  compras = compras.filter((c) => c.id !== +req.params.id);
  res.send("Producto eliminado");
});
routerCompras.post("/nueva", multer({ dest: "uploads/" }).single("foto"), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.body);
  res.status(200).send("Compra agregada");
});

module.exports = {
  routerCompras,
};
