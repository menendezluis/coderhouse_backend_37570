import { Router } from "express";
import { userModel } from "../models/users.model.js";

const router = Router();

router.get("/users", async (req, res) => {
  const users = await userModel.find();
  res.send(users);
});

router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const users = await userModel.findById(id);
  res.send(users);
});

router.post("/users", async (req, res) => {
  const user = new userModel(req.body);
  await user.save();
  res.send(user);
});

router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, lastname, email, password } = req.body;

  const result = await userModel.findByIdAndUpdate(id, {
    name,
    lastname,
    email,
    password,
  });

  res.send(result);
});

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  const result = await userModel.findByIdAndDelete(id);

  res.send(result);
});

export default router;
