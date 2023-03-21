import { USERSDAO } from "../dao/index.js";
export const saveUser = async (req, res) => {
  const user = req.body;
  await USERSDAO.save(user);
  res.send(user);
};

export const getUsers = async (req, res) => {
  res.send(await USERSDAO.getAll());
};
