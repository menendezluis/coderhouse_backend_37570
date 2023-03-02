import { Router } from "express";
import { createHash } from "../utils.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/", async (req, res) => {
  const { first_name, last_name, email, password, age } = req.body;

  if (!first_name || !last_name || !email || !password || !age) {
    res.status(400).json({ message: "error", data: "Faltan datos" });
  } else {
    let user = {
      first_name,
      last_name,
      email,
      password,
      age,
      password: createHash(password),
    };
    res.status(200).send(user);
  }
});

export default router;
