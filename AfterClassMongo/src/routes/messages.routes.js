import { Router } from "express";
import { messageModel } from "../models/chat.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    let users = await messageModel.find();
    console.log(users);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/", (req, res) => {
  let messages = [];
  res.json(messages);
});
export default router;
