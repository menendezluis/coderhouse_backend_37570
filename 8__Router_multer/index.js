const express = require("express");
const app = express();
const { routerCompras } = require("./routerCompras");
const { estubeAqui, errorHandler } = require("./middlewares");

app.use(errorHandler);

const staticFilesPath = __dirname + "/public";
app.use("/static", express.static(staticFilesPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(estubeAqui, estubeAqui, estubeAqui, estubeAqui);

app.use("/compras", routerCompras);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
