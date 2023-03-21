import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  email: String,
});

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;
