import contactModel from "./models/contact.js";

export default class Contacts {
  constructor() {}
  get = async () => {
    return await contactModel.find({});
  };
  create = async (contact) => {
    return await contactModel.create(contact);
  };
  modify = async (id, contact) => {
    return await contactModel.findByIdAndUpdate(id, contact, { new: true });
  };
  delete = async (id) => {
    return await contactModel.findByIdAndDelete(id);
  };
}
