import express from "express";
import userRoutes from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

app.listen(8080, () => {
  console.log(`Servidor escuchando en http://localhost:8080`);
});
