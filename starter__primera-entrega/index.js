const express = require("express");
const app = express();
const cartsRouter = require('./routers/cartsRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/carts', cartsRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
