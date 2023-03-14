import { Router } from "express";
import passport from "passport";
import { generateToken, authToken } from "../utils.js";
import registroModel from "../models/registro.model.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("registro", {});
});

router.post(
  "/",
  passport.authenticate("register", { failureRedirect: "/failregister" }),
  async (req, res) => {
    const accessToken = generateToken(req.body);

    res.send({
      status: "success",
      message: "Usuario creado correctamente",
      accessToken,
    });
  }
);

router.get("/failregister", async (req, res) => {
  console.log("failed Strategy");
  res.send({ error: "Failed Strategy" });
});

export default router;
