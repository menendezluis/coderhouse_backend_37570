import express from "express";
import UserRouter from "./routes/user.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const userRouter = new UserRouter();
app.use("/api/user", userRouter.getRouter());

app.listen(port, () => {
  console.log(`Server up en puerto ${port}`);
});
