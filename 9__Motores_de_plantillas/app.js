const express = require("express");
const handlebars = require("express-handlebars");

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

const users = [
  {
    nombre: "Elba",
    apellido: "Surero",
    correo: "elba_surero@gmail.com",
    telefonos: [
      {
        numero: "08009990271",
      },
      {
        numero: "+54935134466775",
      },
    ],
    esMayor: true,
  },
  {
    nombre: "Aitor",
    apellido: "Tilla",
    correo: "aitor_tilla@gmail.com",
    telefonos: "08009990272",
    esMayor: false,
  },
];
app.get("/", (req, res) => {
  const random = Number(Math.random().toFixed());
  res.render("datos_personales", users[random]);
});
app.get("/saludar/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  res.render("saludar", { nombre, stylesheet: 'nombre' });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
