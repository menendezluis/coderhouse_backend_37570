import express from "express";
import { Server } from "socket.io";
import { engine } from "express-handlebars";
import viewsRoute from "./routes/chat.routes.js";
import messageRoute from "./routes/messages.routes.js";
import { messageModel } from "./models/chat.model.js";

import mongoose from "mongoose";
import * as dotenv from "dotenv";

const app = express();
const PORT = 3000;
dotenv.config();

const messages = [];
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const httpServer = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("iniciado con socket.io");
});

const socketServer = new Server(httpServer);
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/socketMessage", (req, res) => {
  const { message } = req.body;
  socketServer.emit("message", message);

  res.send("ok");
});
app.use("/chat", viewsRoute);
app.use("/messages", messageRoute);

socketServer.on("connection", (socket) => {
  console.log("Nuevo cliente conectado!");
  socket.on("new-user", (data) => {
    socket.user = data.user;
    socket.id = data.id;
    socketServer.emit("new-user-connected", {
      user: socket.user,
      id: socket.id,
    });
  });
  socket.on("message", (data) => {
    messages.push(data);
    socketServer.emit("messageLogs", messages);
    messageModel.create(data);
  });
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
