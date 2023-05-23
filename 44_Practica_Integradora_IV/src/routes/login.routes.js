import { Router } from "express";
import passport from "passport";
import registroModel from "../models/registro.model.js";
import { generateToken, authToken } from "../utils.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("login", {});
});

router.post(
  "/user",
  passport.authenticate("login", { failureRedirect: "/faillogin" }),
  async (req, res) => {
    if (!req.user)
      return res
        .status(400)
        .send({ status: "error", error: "Usuario no encontrado" });
    req.session.user = {
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
      age: req.user.age,
    };
    req.session.admin = true;
    const accessToken = generateToken({
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
      age: req.user.age,
    });
    return res.status(200).send({ message: "success", accessToken });
  }
);

router.get("/faillogin", async (req, res) => {
  res.send({ error: "Failed Strategy" });
});

const auth = async (req, res, next) => {
  if (await req.session?.user) {
    return next();
  } else {
    return res.status(401).send("error de autenticación");
  }
};

router.get("/products", auth, async (req, res) => {
  try {
    if (await req.session.user) {
      const userData = await registroModel.findOne({
        email: req.session.user.email,
      });
      const { firstName, lastName } = userData;
      res.render("products", { firstName, lastName });
    }
  } catch (error) {
    req.logger.error(
      `${req.method} en ${req.url} - ${new Date().toISOString()}`
    );
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.status(401).send({ message: "ERROR" });
    } else {
      res.status(200).send({ message: "LogoutOK" });
    }
  });
});

export default router;
