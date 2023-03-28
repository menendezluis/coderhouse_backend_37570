export const getBusiness = async (req, res) => {
  res.json({ status: "sucess", result: "getBusiness" });
};

export const getBusinessById = async (req, res) => {
  res.json({ status: "sucess", result: "getBusinessById" });
};

export const createBusiness = async (req, res) => {
  res.json({ status: "sucess", result: "createBusiness" });
};

export const addProduct = async (req, res) => {
  res.json({ status: "sucess", result: "addProduct" });
};

export default {
  getBusiness,
  getBusinessById,
  createBusiness,
  addProduct,
};
