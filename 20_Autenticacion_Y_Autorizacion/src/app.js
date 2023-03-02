import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import { engine } from "express-handlebars";
import loginRouter from "./routes/login.routes.js";
import signupRouter from "./routes/signup.routes.js";
import profileRouter from "./routes/profile.routes.js";
import forgotRouter from "./routes/forgot.routes.js";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3434;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const STRING_CONNECTION = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.pnpufdn.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "coderhouse",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: STRING_CONNECTION,
      mongoOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      ttl: 15,
    }),
  })
);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");
app.use(express.static("public"));
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/profile", profileRouter);
app.use("/forgot", forgotRouter);

const server = app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));

const environment = async () => {
  try {
    await mongoose.connect(STRING_CONNECTION);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.log(`Error al conectar a MongoDB: ${error}`);
  }
};

environment();
