import express from "express";
import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import userRoutes from "./routes/users.routes.js";

const app = express();

app.use(express.json());

app.get("/faker", async (req, res) => {
  let name = faker.name.firstName();
  let lastname = faker.name.lastName();
  const user = {
    name: name,
    lastname: lastname,
    email: (name + lastname + "@gmail.com").toLowerCase(),
    password: faker.internet.password(),
  };

  res.send(user);
});
app.use("/api", userRoutes);

mongoose.connect("mongodb://localhost:27017/afterclass-artillery", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
