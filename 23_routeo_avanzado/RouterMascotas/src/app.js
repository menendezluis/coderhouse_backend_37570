import express from "express";
import routerMascotas from "./router/mascota.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/pets", routerMascotas);

const server = app.listen(8080, () => {
  console.log("Server listening on port 8080");
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));
