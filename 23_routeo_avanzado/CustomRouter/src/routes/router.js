import { Router } from "express";
import jwt from "jsonwebtoken";

export default class Routers {
  constructor() {
    this.router = Router();
    this.init();
  }
  getRouter() {
    return this.router;
  }
  init() {}

  get(path, policies, ...callbacks) {
    this.router.get(
      path,
      this.handlePolicies(policies),
      this.generateCustomResponse,
      this.applyCallbacks(callbacks)
    );
  }

  applyCallbacks(callbacks) {
    return callbacks.map((callback) => async (...params) => {
      try {
        await callback.apply(this, params);
      } catch (err) {
        console.log(err);
        params[1].status(500).json(err);
      }
    });
  }

  generateCustomResponse = (req, res, next) => {
    res.sendSuccess = (payload) => res.send({ status: "success", payload });
    res.sendServerError = (error) =>
      res.status(500).send({ status: "error", error });
    res.sendUserError = (error) =>
      res.status(400).send({ status: "error", error });
    next();
  };

  handlePolicies = (policies) => (req, res, next) => {
    if (policies[0] === "PUBLIC") return next();

    const authHeaders = req.headers.authorization;
    console.log(authHeaders, "here");
    if (!authHeaders) return res.status(403).json({ message: "No autorizado" });
    const token = authHeaders && authHeaders.split(" ")[1];

    let user = jwt.verify(token, "CoderSecretClaseRouter");

    if (!policies.includes(user.role.toUpperCase()))
      return res.status(403).json({ message: "No autorizado" });
    req.user = user;
    next();
  };
}
