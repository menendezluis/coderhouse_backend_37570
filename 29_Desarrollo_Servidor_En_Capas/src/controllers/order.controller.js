export const getOrders = async (req, res) => {
  res.json({ status: "sucess", result: "getOrder" });
};

export const getOrderById = async (req, res) => {
  res.json({ status: "sucess", result: "getOrderById" });
};

export const createOrder = async (req, res) => {
  res.json({ status: "sucess", result: "createOrder" });
};

export const resolveOrder = async (req, res) => {
  res.json({ status: "sucess", result: "resolveOrder" });
};

export default {
  getOrders,
  getOrderById,
  createOrder,
  resolveOrder,
};
