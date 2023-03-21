import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/users.routes.js";
import toysRouter from "./routes/toys.routes.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/toys", toysRouter);

app.listen(8080, () => {
  console.log("Server started on port 8080");
});

mongoose.connect("mongodb://localhost:27017/capas37570", (err) => {
  if (err) {
    console.log("No se puede conectar a la base de datos");
  } else {
    console.log("Mongoose conectado con Exito");
  }
});
