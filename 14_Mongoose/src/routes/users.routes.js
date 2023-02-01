import { Router } from "express";
import { userModel } from "../models/users.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    let users = await userModel.find();
    res.status(200).json({
      result: "success",
      payload: users,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post("/", async (req, res) => {
  let { first_name, last_name, email } = req.body;
  console.log({ first_name, last_name, email });
  if (!first_name || !last_name || !email) {
    res.status(400).json({ error: "Faltan datos" });
    return;
  } else {
    let result = await userModel.create({ first_name, last_name, email });
    res.status(200).json({ result: "success", payload: result });
  }
});

router.put("/:uid", async (req, res) => {
  let uid = req.params.uid;

  let { first_name, last_name, email } = req.body;
  const newUser = { first_name, last_name, email };

  if (!first_name || !last_name || !email) {
    res.status(400).json({ error: "Faltan datos" });
    return;
  } else {
    let result = await userModel.updateOne({ _id: uid }, newUser);
    res.status(200).json({ result: "success", payload: result });
  }
});

router.delete("/:uid", async (req, res) => {
  let { uid } = req.params;

  let result = await userModel.deleteOne({ _id: uid });
  res.status(200).json({ result: "success", payload: result });
});
export default router;
