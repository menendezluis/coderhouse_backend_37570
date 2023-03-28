import orderModel from "../models/orders.model.js";

export default class Order {
  getOrders = async () => {
    try {
      let result = await orderModel.find();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getOrderById = async (id) => {
    try {
      let result = await orderModel.findById(id);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  createOrder = async (order) => {
    try {
      let result = await orderModel.create(order);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  resolveOrder = async (id, order) => {
    try {
      let result = orderModel.findByIdAndUpdate(id, order);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}
