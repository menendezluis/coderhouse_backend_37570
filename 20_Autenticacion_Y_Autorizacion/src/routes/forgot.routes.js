import { Router } from "express";
import userModel from "../model/users.js";
import { isValidPassword, createHash } from "../utils.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("forgot", { title: "Login", styles: "css/login.css" });
});

router.post("/", async (req, res) => {
  const { username, password, repeatPassword } = req.body;
  let newPassword = createHash(password);
  console.log(repeatPassword, newPassword);

  if (!username || !password) {
    res.status(400).json({
      message: "error",
      data: "Faltan campos",
    });
  }
  if (!isValidPassword(repeatPassword, newPassword)) {
    res.status(400).json({
      message: "error",
      data: "Las contraseñas no coinciden",
    });
    return;
  }

  //console.log({ username, password });
  try {
    const response = await userModel.findOne({
      email: username,
    });

    if (!response) {
      res.status(404).json({
        message: "error",
        data: "El usuario no existe",
      });
      return;
    } else {
      const respuesta = await userModel.findOneAndUpdate(
        { email: username },
        { password: repeatPassword }
      );
      if (respuesta) {
        res.status(200).json({
          message: "success",
          data: "Contraseña actualizada",
        });
        return;
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }
});
export default router;
