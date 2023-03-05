import express from "express";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import passport from "passport";
import initializePassport from "./passport.config.js";
import { passportCall, authorization } from "./utils.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
initializePassport();
app.use(passport.initialize());

app.use(express.static("public"));

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({
      message: "error",
      data: "Faltan campos",
    });
  }
  if (username === "coder@coder.com" || password === "1234") {
    const myToken = jwt.sign(
      { username, password, role: "admin" },
      "coderSecret",
      {
        expiresIn: "24h",
      }
    );
    //sin cookie con localstorage
    // res.status(200).json({ message: "Loggen in successfully", token: myToken });
    //con cookie
    res
      .cookie("coderCookieToken", myToken, {
        maxAge: 60 * 60 * 1000,
      })
      .send({ message: "Loggeg in!" });
  } else {
    res.status(401).json({
      message: "error",
      data: "Usuario o contraseña incorrectos",
    });
  }
});
/*app.get("/", (req, res) => {
  res.send("Hello World!");
});
// sin passport call
app.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send(req.user);
  }
);
*/
app.get("/current", passportCall("jwt"), authorization("user"), (req, res) => {
  res.send(req.user);
});
app.listen(3000, () => {
  console.log("Server on port 3000");
});
