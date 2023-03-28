import orderModel from "../models/order.model.js";

export default class Orders {
  getOrders = async (req, res) => {
    try {
      const orders = await orderModel.find();
      return orders;
    } catch (error) {
      return null;
    }
  };

  getOrderById = async (id) => {
    try {
      let result = await orderModel.findOne({ _id: id });
      return result;
    } catch (error) {
      return null;
    }
  };

  saveOrder = async (order) => {
    try {
      let newOrder = await orderModel.create(order);
      return newOrder;
    } catch (error) {
      return null;
    }
  };

  resolveOrder = async (id, order) => {
    try {
      let result = orderModel.updateOne({ _id: id }, order);
      return result;
    } catch (error) {
      return null;
    }
  };
}
