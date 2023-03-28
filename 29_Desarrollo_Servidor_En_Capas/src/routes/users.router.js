import { Router } from "express";
import Users from "../controllers/users.controller.js";

const router = Router();

router.get("/", Users.getUser);
router.post("/", Users.saveUser);
router.get("/:uid", Users.getUserById);

export default router;
