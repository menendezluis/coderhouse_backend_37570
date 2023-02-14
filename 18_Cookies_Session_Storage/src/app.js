import express from "express";
import cookieParser from "cookie-parser";
import { engine } from "express-handlebars";
import pageRouter from "./routes/page.js";
import session from "express-session";
//import { __dirname } from "./utils.js";

const app = express();
const PORT = 3131;

app.use(express.json());
app.use(cookieParser("C0d3rS3cr3t"));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secretCoder",
    resave: true,
    saveUninitialized: true,
  })
);
//app.use(express.static(__dirname + "../public"));

app.get("/session", (req, res) => {
  if (req.session.counter) {
    req.session.counter++;
    res.send(`Bienvenido por ${req.session.counter} vez`);
  } else {
    req.session.counter = 1;
    res.send(`Bienvenido`);
  }
});

app.get("/root", (req, res) => {
  const { name } = req.query;
  if (req.session.counter) {
    req.session.counter++;
    res.send(`Bienvenido ${req.session.name} por ${req.session.counter} vez`);
  } else {
    req.session.counter = 1;
    req.session.name = name !== undefined ? name : "Anonimo";
    res.send(`Bienvenido ${name !== undefined ? name : "Anonimo"}`);
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) res.send("Error al cerrar sesion");
    else res.send("Sesion cerrada");
  });
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/setCookie", (req, res) => {
  res
    .cookie("CoderCookie", "esta es una cookie muy poderosa", { maxAge: 30000 })
    .send("Cookie seteada");
});
app.get("/getCookie", (req, res) => {
  res.send(req.cookies);
});
app.get("/clearCookie", (req, res) => {
  //const getAlCookies = req.cookies;
  //clear all cookies
  /*for (const key in getAlCookies) {
          res.clearCookie(key);
      }
      */

  res.clearCookie("CoderCookie").send("Cookie borrada");
});

app.get("/setSignedCookie", (req, res) => {
  res
    .cookie("signedCookie", "Esta cookie esta firmada", {
      maxAge: 30000,
      signed: true,
    })
    .send("Cookie firmada seteada");
});

app.get("/getSignedCookie", (req, res) => {
  res.send(req.signedCookies);
});

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");
app.use(express.static("public"));

app.use("/page", pageRouter);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));
