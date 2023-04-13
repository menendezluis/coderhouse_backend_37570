import { Router } from "express";
import CustomError from "./CustomError.js";
import EErros from "./EErrors.js";
import { generateUserErrorInfo } from "./info.js";

const users = [];

const router = Router();

router.get("/", (req, res) => {
  res.json({
    status: "success",
    payload: users,
  });
});

router.get("/:uid", (req, res) => {
  console.log(req.params);
  const uid = parseInt(req.params.uid);

  if (typeof uid !== "number") {
    throw CustomError.createError({
      name: "El id debe ser un número",
      message: generateUserErrorInfo({}),
      code: EErros.INVALID_PARAMETER,
    });
  }
  const user = users.find((user) => user.id === uid);

  res.json({
    status: "success",
    payload: user ? user : null,
  });
});

router.post("/", (req, res) => {
  const { first_name, last_name, age, email } = req.body;
  if (!first_name || !last_name || !email) {
    throw CustomError.createError({
      name: "Por favor ingrese todos los datos",
      message: generateUserErrorInfo({
        first_name,
        last_name,
        age,
        email,
      }),
      code: EErros.INVALID_TYPES_ERROR,
    });
  }
  const user = {
    first_name,
    last_name,
    age,
    email,
  };
  if (users.length === 0) {
    user.id = 1;
  } else {
    user.id = users[users.length - 1].id + 1;
  }
  users.push(user);
  res.send({
    status: "success",
    payload: user,
  });
});

export default router;
