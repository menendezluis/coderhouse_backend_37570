import mongoose from "mongoose";

const productsCollection = "products";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

const productModel = mongoose.model(productsCollection, productSchema);

export default productModel;
