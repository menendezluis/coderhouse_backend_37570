export const getUser = async (req, res) => {
  res.json({ status: "sucess", result: "getUser" });
};

export const getUserById = async (req, res) => {
  res.json({ status: "sucess", result: "getUserById" });
};

export const saveUser = async (req, res) => {
  res.json({ status: "sucess", result: "saveUser" });
};

export default {
  getUser,
  getUserById,
  saveUser,
};
