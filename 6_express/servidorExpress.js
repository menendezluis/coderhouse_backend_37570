const express = require("express");
const app = express();

// Setear todo el servidor

//endpoints
app.get("/bienvenida/:nombre", function (req, res) {
  const nombre = req.params.nombre;
  const respuesta = `
      <html>
          <body>
              <h1 style="color: purple;">Bienvenido ${nombre}!</h1>
          </body>
      </html>
      `;
  res.send(respuesta);
});
app.get("/bienvenida/:nombre/:apellido", function (req, res) {
  const { nombre, apellido } = req.params;
  const respuesta = `
    <html>
        <body>
            <h1 style="color: red;">Bienvenido ${nombre} ${apellido}!</h1>
        </body>
    </html>
    `;
  res.send(respuesta);
});
const estudiantes = [
  { nombre: "Santiago Gonzalez", id: 1 },
  { nombre: "Criastian Stocco", id: 2 },
  { nombre: "Facundo Rey", id: 3 },
  { nombre: "Fabrizio Bertolo", id: 4 },
];
app.get("/estudiante/:id", (req, res) => {
  const estudiante = estudiantes.find((e) => e.id === Number(req.params.id));
  res.send(estudiante);
});
app.get("/estudiantes", (req, res) => {
  const limite = req.query.limite;
  const idEstudiante = req.query.id;
  let respuesta = estudiantes;
  if (limite && !isNaN(Number(limite))) {
    respuesta = respuesta.slice(0, limite);
  }
  if (idEstudiante && !isNaN(Number(idEstudiante))) {
    respuesta = respuesta[idEstudiante];
  }
  res.send(respuesta);
});

app.get("/usuario", (req, res) => {
  const respuesta = {
    nombre: "Susana",
    apellido: "Horia",
    edad: 69,
    correo: "susana_hot@hotmail.com",
  };
  res.send(respuesta);
});

app.get("/", (req, res) => {
  res.send("Hola mundo!");
});

// Levantar el servidor
app.listen(3000);
