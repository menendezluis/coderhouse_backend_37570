import mongoose from "mongoose";

const userCollection = "users";

//ojo, en esta ocasion no vamos a trabajar con cammelCase
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export const userModel = mongoose.model(userCollection, userSchema);
