import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: {
    type: String,
    index: true,
  },
  email: {
    type: String,
    unique: true,
  },
  gender: String,
});

export const userModel = mongoose.model(userCollection, userSchema);
