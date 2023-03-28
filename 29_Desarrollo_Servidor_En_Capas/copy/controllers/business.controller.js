import Business from "../dao/classes/business.dao.js";

const businessService = new Business();

export const getBusiness = async (req, res) => {
  let result = await businessService.getBusiness();
  if (!result)
    return res
      .status(500)
      .json({ status: "error", result: "No se encontraron negocios" });
  res.json({ status: "sucess", result: result });
};

export const getBusinessById = async (req, res) => {
  let result = await businessService.getBusinessById(req.params.bid);
  if (!result)
    return res
      .status(500)
      .json({ status: "error", result: "No se encontraron negocios" });

  res.json({ status: "sucess", result: result });
};

export const createBusiness = async (req, res) => {
  let result = await businessService.saveBusines(req.body);
  if (!result)
    return res
      .status(500)
      .json({ status: "error", result: "No se pudo crear el negocio" });

  res.json({ status: "sucess", result: result });
};

export const addProduct = async (req, res) => {
  const { bid } = req.params;
  const product = req.body;
  let result = await businessService.addProduct(bid, product);
  if (!result)
    return res
      .status(500)
      .json({ status: "error", result: "No se pudo agregar el producto" });

  res.json({ status: "sucess", result: result });
};

export default {
  getBusiness,
  getBusinessById,
  createBusiness,
  addProduct,
};
