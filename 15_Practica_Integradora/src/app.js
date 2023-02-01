import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import productsRouter from "./routes/products.routes.js";
import cartsRouter from "./routes/carts.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.SERVER_PORT || 8181;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/productos", productsRouter);
app.use("/api/carrito", cartsRouter);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));

const environment = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.pnpufdn.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    );
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.log(`Error al conectar a MongoDB: ${error}`);
  }
};

const isValidStartData = () => {
  if (DB_PASS && DB_USER) return true;
  else return false;
};
console.log("isValidStartData", isValidStartData());
isValidStartData() && environment();
