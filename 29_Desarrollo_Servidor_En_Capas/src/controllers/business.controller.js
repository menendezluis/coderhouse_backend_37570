import Business from "../dao/classes/business.dao.js";

const businessService = new Business();

export const getBusiness = async (req, res) => {
  let result = await businessService.getBusiness();
  if (!result)
    return res
      .status(500)
      .send({ status: "error", message: "Something went wrong" });
  res.send({ status: "success", result });
};

export const getBusinessById = async (req, res) => {
  const { bid } = req.params;
  let result = await businessService.getBusinessById(bid);
  if (!result)
    return res
      .status(404)
      .send({ status: "error", message: "Business not found" });
  res.send({ status: "success", result });
};

export const createBusiness = async (req, res) => {
  const business = req.body;
  let result = await businessService.saveBusiness(business);
  if (!result)
    return res.status(500).send({ status: "error", message: "Error saving" });
  res.send({ status: "success", result });
};

export const addProduct = async (req, res) => {
  let product = req.body;
  let business = await businessService.getBusinessById(req.params.bid);
  if (!business)
    return res
      .status(404)
      .send({ status: "error", message: "Business not found" });
  business.products.push(product);
  let updateResult = await businessService.updateBusiness(
    req.params.bid,
    business
  );

  if (!updateResult)
    return res.status(500).send({ status: "error", message: "Error saving" });
  res.send({ status: "success", result: updateResult });
};
