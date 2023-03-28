import Order from "../dao/classes/order.dao.js";
import Business from "../dao/classes/business.dao.js";
import User from "../dao/classes/user.dao.js";

const orderService = new Order();
const businessService = new Business();
const userService = new User();

export const getOrders = async (req, res) => {
  let result = await orderService.getOrders();
  res.send({ status: "success", result });
};

export const getOrdersById = async (req, res) => {
  const { oid } = req.params;
  let result = await orderService.getOrderById(oid);
  res.send({ status: "success", result });
};

export const createOrder = async (req, res) => {
  console.log(req.body);
  const { user, business, products } = req.body;
  let resultUser = await userService.getUserByID(user);
  let businessResult = await businessService.getBusinessById(business);
  let actualOrders = businessResult.products.filter((product) =>
    products.includes(product.id)
  );
  let sum = actualOrders.reduce((acc, prev) => {
    acc += prev.price;
    return acc;
  }, 0);
  let orderNumber = Date.now() + Math.floor(Math.random() * 100000 + 1);
  let order = {
    number: orderNumber,
    business,
    user,
    status: "pending",
    products: actualOrders.map((product) => product.id),
    totalPrice: sum,
  };
  console.log(order);
  let orderResult = await orderService.createOrder(order);
  resultUser.orders.push(orderResult.id);
  await userService.updateUser(user, resultUser);

  res.send({ status: "success", result: orderResult });
};

export const resolveOrder = async (req, res) => {
  const { resolve } = req.query;
  let order = await orderService.getOrderById(req.params.oid);
  order.status = resolve;
  await orderService.updateOrder(req.params.oid, {
    ...order,
  });
  res.send({ status: "success", message: "Resolving Order" });
};
