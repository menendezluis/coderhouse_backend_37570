import { Router } from "express";
import { getUsers, saveUser } from "../controllers/users.controllers.js";

const router = Router();

router.get("/", getUsers);
router.post("/", saveUser);

export default router;
