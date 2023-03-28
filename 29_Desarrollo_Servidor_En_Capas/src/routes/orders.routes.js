import { Router } from "express";
import {
  getOrders,
  getOrdersById,
  createOrder,
  resolveOrder,
} from "../controllers/orders.controller.js";
const router = Router();

router.get("/", getOrders);

router.get("/:id", getOrdersById);

router.post("/", createOrder);

router.put("/:id", resolveOrder);

export default router;
