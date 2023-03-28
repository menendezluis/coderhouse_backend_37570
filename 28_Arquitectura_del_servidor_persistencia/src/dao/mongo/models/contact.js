import mongoose from "mongoose";

const contactsCollection = "contacts";

const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
});

const contactModel = mongoose.model(contactsCollection, contactSchema);

export default contactModel;
