import bcrypt from "bcrypt";
import { generateToken, authToken } from "./jwt.js";

const createHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

const isValidPassword = (user, password) => {
  return bcrypt.compareSync(password, user.password);
};
export { createHash, isValidPassword, generateToken, authToken };
