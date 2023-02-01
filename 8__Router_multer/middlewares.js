function estubeAqui(req, res, next) {
  console.log("Estube aqui!");
  next();
}

function compras(req, res, next) {
  console.log("Se esta accediendo a las rutas de /compras");
  next();
}

function errorHandler(err, req, res, next) {
  console.log(err);
  res.status(500).send("Algo se rompio!");
}

module.exports = {
  estubeAqui,
  compras,
  errorHandler,
};
