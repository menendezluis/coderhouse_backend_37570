import { Router } from "express";
import userModel from "../model/users.js";
import { isValidPassword } from "../utils.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("login", { title: "Login", styles: "css/login.css" });
});

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  //console.log({ username, password });
  try {
    const response = await userModel.findOne({
      email: username,
    });

    // console.log(password, response.password);
    //const isValid = isValidPassword(password, response.password);
    //console.log(isValid);
    if (response) {
      if (isValidPassword(password, response.password)) {
        req.session.user = response;
        res.status(200).json({ message: "success", data: response });
      } else {
        res.status(401).json({
          message: "error",
          data: "Error, por favor revisa tus credenciales.",
        });
      }
    } else {
      res.status(404).json({
        message: "error",
        data: "Algo ha pasado, consulta al administrador",
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export default router;
