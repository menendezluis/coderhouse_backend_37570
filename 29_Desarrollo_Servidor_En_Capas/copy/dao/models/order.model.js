import mongoose from "mongoose";

const ordersCollection = "Orders";

const orderSchema = new mongoose.Schema({
  number: Number,
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  products: [],
  totalPrice: Number,
});

const orderModel = mongoose.model(ordersCollection, orderSchema);

export default orderModel;
