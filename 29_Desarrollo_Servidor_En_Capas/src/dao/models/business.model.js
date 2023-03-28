import mongoose from "mongoose";

const businessesCollection = "Business";

const businessSchema = new mongoose.Schema({
  name: String,
  products: [],
});

const businessModel = mongoose.model(businessesCollection, businessSchema);

export default businessModel;
