import userModel from "./models/users.js";

export default class UsersDao {
  constructor() {}

  async getAll() {
    return await userModel.find();
  }

  async save(obj) {
    return await userModel.create(obj);
  }
}
