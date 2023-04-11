import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/users.routes.js";
import businessRouter from "./routes/business.routes.js";
import orderRouter from "./routes/orders.routes.js";

const PORT = process.env.PORT || 8080;
const app = express();

const connection = mongoose.connect(
  "mongodb://localhost:27017/fooddelivery41105",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5502"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api/users", userRouter);
app.use("/api/business", businessRouter);
app.use("/api/orders", orderRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
