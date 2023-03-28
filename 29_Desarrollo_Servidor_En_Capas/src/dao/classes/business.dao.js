import businessModel from "../models/business.model.js";

export default class Business {
  getBusiness = async () => {
    try {
      let result = await businessModel.find();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getBusinessById = async (id) => {
    try {
      let result = await businessModel.findById(id);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  saveBusiness = async (business) => {
    try {
      let result = await businessModel.create(business);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  updateBusiness = async (id, business) => {
    try {
      let result = businessModel.findByIdAndUpdate(id, business);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}
