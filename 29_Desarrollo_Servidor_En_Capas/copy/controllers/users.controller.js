import User from "../dao/classes/user.dao.js";

const userService = new User();

export const getUser = async (req, res) => {
  const data = await userService.getUser();

  res.json({ status: "sucess", result: data });
};

export const getUserById = async (req, res) => {
  const { uid } = req.params;
  const data = await userService.getUserById(uid);
  res.json({ status: "sucess", result: data });
};

export const saveUser = async (req, res) => {
  const { body } = req;
  const data = await userService.saveUser(body);
  res.json({ status: "sucess", result: data });
};

export default {
  getUser,
  getUserById,
  saveUser,
};
