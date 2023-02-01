const express = require("express");
const routerCarts = express.Router();

routerCarts.post("/", (req, res) => {
  // Crear el carrito
  res.send("Carrito creado");
});
routerCarts.get("/:cid", (req, res) => {
    const carritoId = req.params.cid;
  // Mostrar los productos que pertenezcan al carrito con ese cid
});
routerCarts.post("/:cid/product/:pid", (req, res) => {
    const carritoId = req.params.cid;
    const productoId = req.params.pid;
  // agregar el producto al carrito
});

module.exports = {
  routerCarts,
};
