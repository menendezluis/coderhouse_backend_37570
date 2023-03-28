import businessModel from "../models/business.model.js";

export default class Business {
  getBusiness = async () => {
    try {
      const businesses = await businessModel.find();
      return businesses;
    } catch (error) {
      return null;
    }
  };

  getBusinessById = async (id) => {
    try {
      let result = await businessModel.findOne({ _id: id });
      return result;
    } catch (error) {
      return null;
    }
  };

  saveBusines = async (business) => {
    try {
      let newBusiness = await businessModel.create(business);
      return newBusiness;
    } catch (error) {
      return null;
    }
  };

  addProduct = async (id, product) => {
    try {
      let result = await businessModel.findByIdAndRemove(id, product);
      return result;
    } catch (error) {
      return null;
    }
  };
}
