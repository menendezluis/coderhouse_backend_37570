import express from "express";
import mongoose from "mongoose";
import faker from "faker";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.get("/faker", async (req, res) => {
  const user = {
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };

  res.send(user);
});

app.use("/api", userRoutes);

mongoose.connect("mongodb://localhost:27017/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
