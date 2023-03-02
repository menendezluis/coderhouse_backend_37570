import express from "express";
import registerRoutes from "./router/register.routes.js";

const PORT = "3737";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/register", registerRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on("error", (error) =>
  console.log(`Server is not running due to: ${error}`)
);
