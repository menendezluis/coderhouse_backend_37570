import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/users.routes.js";

const app = express();
const port = 3000;
dotenv.config();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

server.on("error", (error) => {
  console.log("Error en el servidor", error);
});

mongoose.connect(
  `mongodb+srv://${process.env.USER_MONGO}:${process.env.PASS_MONGO}@cluster0.pnpufdn.mongodb.net/${process.env.DB_MONGO}?retryWrites=true&w=majority`,
  (error) => {
    if (error) {
      console.log("Error al conectar a la base de datos");
    } else {
      console.log("Conectado a la base de datos");
    }
  }
);

app.use("/users", userRouter);
