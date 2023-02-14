import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("page", { title: "Pagina" });
});

router.post("/", (req, res) => {
  const { first_name, email } = req.body;

  res.cookie("first_name", first_name, { maxAge: 15000 });
  res.cookie("email", email, { maxAge: 15000 });

  res.send({ message: "Cookie seteada" });
  return;
});

router.get("/getCookie", (req, res) => {
  res.send(req.cookies);
});

export default router;
