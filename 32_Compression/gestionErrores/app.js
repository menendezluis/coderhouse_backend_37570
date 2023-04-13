import express from "express";
import usersRouter from "./routes/users.js";
import errorHandler from "./middleware/errors/index.js";

const app = express();
const server = app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

app.use(express.json());

app.use("/api/users", usersRouter);
app.use(errorHandler);
