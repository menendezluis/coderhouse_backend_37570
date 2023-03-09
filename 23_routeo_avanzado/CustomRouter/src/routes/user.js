import AppRouter from "./router.js";
import jwt from "jsonwebtoken";
export default class UserRouter extends AppRouter {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.get("/public", ["PUBLIC"], (req, res) => {
      let user = {
        email: req.body.email,
        role: "user",
      };

      let token = jwt.sign(user, "CoderSecretClaseRouter");

      res.sendSuccess({ token });
    });
    this.get("/private", ["USER", "USER_PREMIUM"], (req, res) => {
      res.sendSuccess(req.user);
    });
  }
}
