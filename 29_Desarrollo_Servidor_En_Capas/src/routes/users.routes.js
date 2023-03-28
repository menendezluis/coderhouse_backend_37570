import { Router } from "express";
import {
  getUsers,
  getUserByID,
  saveUser,
} from "../controllers/users.controller.js";

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUserByID);

router.post("/", saveUser);

export default router;
