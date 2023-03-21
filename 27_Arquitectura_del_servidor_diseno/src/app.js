import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5501"],
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Saludos Clase " });
});

app.listen(3000);
