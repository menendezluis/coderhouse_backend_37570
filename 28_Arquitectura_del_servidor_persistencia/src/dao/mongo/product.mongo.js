import productModel from "./models/product.js";

export default class Products {
  constructor() {}
  get = async () => {
    return await productModel.find({});
  };
  create = async (product) => {
    return await productModel.create(product);
  };
  modify = async (id, product) => {
    return await productModel.findByIdAndUpdate(id, product, { new: true });
  };
  delete = async (id) => {
    return await productModel.findByIdAndDelete(id);
  };
}
