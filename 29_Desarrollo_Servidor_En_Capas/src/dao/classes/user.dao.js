import userModel from "../models/user.model.js";

export default class User {
  getUsers = async () => {
    try {
      let users = await userModel.find();
      return users;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getUserByID = async (id) => {
    try {
      let user = userModel.findById(id);
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  saveUser = async (user) => {
    try {
      //usando save
      //let newUser = new userModel(user);
      //let savedUser = await newUser.save();
      //usando create
      let savedUser = await userModel.create(user);
      return savedUser;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  updateUser = async (id, user) => {
    try {
      let result = userModel.findByIdAndUpdate(id, user);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}
