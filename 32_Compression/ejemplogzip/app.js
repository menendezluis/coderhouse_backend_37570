import express from "express";
import compression from "express-compression";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//app.use(compression()); // usando gzip
app.use(
  compression({
    brotli: { enabled: true, zlib: {} },
  })
); // usando brotli

app.get("/conbrotli", (req, res) => {
  let myString = "Hola coders, este endpoint es muy pesado";
  for (let i = 0; i < 100000; i++) {
    myString += "Hola coders, este endpoint es muy pesado";
  }
  res.send(myString);
});
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
