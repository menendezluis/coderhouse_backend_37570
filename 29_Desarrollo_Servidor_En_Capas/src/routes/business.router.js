import { Router } from "express";
import Business from "../controllers/business.controller.js";

const router = Router();

router.get("/", Business.getBusiness);
router.post("/", Business.createBusiness);
router.get("/:uid", Business.getBusinessById);
router.post("/:uid/product", Business.addProduct);

export default router;
