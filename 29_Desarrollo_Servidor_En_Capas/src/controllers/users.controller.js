import User from "../dao/classes/user.dao.js";

const userService = new User();
export const getUsers = async (req, res) => {
  let result = await userService.getUsers();
  if (!result)
    return res
      .status(500)
      .send({ status: "error", message: "Something went wrong" });
  res.send({ status: "success", result });
};

export const getUserByID = async (req, res) => {
  const { uid } = req.params;
  let result = await userService.getUserByID(uid);
  if (!result)
    return res.status(404).send({ status: "error", message: "User not found" });
  res.send({ status: "success", result });
};

export const saveUser = async (req, res) => {
  const user = req.body;
  let result = await userService.saveUser(user);
  if (!result)
    return res.status(500).send({ status: "error", message: "Error saving" });
  res.send({ status: "success", result });
};
