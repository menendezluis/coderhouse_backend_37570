import express from "express";
import mongoose from "mongoose";
import businessRouter from "./routes/business.router.js";
import ordersRouter from "./routes/orders.router.js";
import usersRouter from "./routes/users.router.js";
import * as dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/business", businessRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

mongoose.connect("mongodb://localhost:27017/capasintegracion37570", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
