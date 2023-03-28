import userModel from "../models/user.model.js";

export default class User {
  getUser = async () => {
    try {
      const users = await userModel.find();
      return users;
    } catch (error) {
      return null;
    }
  };

  getUserById = async (id) => {
    try {
      let user = await userModel.findOne({ _id: id });
      return user;
    } catch (error) {
      return null;
    }
  };

  saveUser = async (user) => {
    try {
      let newUser = await userModel.create(user);
      return newUser;
    } catch (error) {
      return null;
    }
  };

  updateUser = async (id, user) => {
    try {
      let result = await userModel.updateOne({ _id: id }, user);
      return result;
    } catch (error) {
      return null;
    }
  };
}
