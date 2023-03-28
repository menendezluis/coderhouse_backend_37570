import { Router } from "express";
import Orders from "../controllers/order.controller.js";

const router = Router();

router.get("/", Orders.getOrders);
router.post("/", Orders.createOrder);
router.get("/:uid", Orders.getOrderById);
router.put("/:uid", Orders.resolveOrder);

export default router;
