import mongoose from "mongoose";

const usersCollection = "Users";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Orders",
    },
  ],
});

const userModel = mongoose.model(usersCollection, userSchema);

export default userModel;
