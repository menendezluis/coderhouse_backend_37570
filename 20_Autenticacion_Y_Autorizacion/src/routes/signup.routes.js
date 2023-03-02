import { Router } from "express";
import userModel from "../model/users.js";
import { createHash } from "../utils.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("signup", { title: "Signup", styles: "css/signup.css" });
});

router.post("/", async (req, res) => {
  const { first_name, last_name, email, password, age } = req.body;
  try {
    const user = await userModel.create({
      first_name,
      last_name,
      email,
      password: createHash(password),
      age,
    });
    res.status(201).json({ message: "success", data: user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export default router;
