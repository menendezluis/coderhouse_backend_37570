import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import orderModel from "./model/order.js";
//import createPizza from "./data.js";
import { generateStudents } from "./data.js";
import studentModel from "./model/students.js";

dotenv.config();

const PORT = process.env.SERVER_PORT || 3131;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

console.log(DB_USER, DB_PASS, DB_NAME);
const STRING_CONNECTION = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.pnpufdn.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));

const environment = async () => {
  try {
    await mongoose.connect(STRING_CONNECTION);
    console.log("Conectado a MongoDB");
    //create students bulk
    //const myStudentsList = generateStudents(100);
    //await studentModel.insertMany(myStudentsList);

    /*for (let i = 0; i < 30; i++) {
      await orderModel.create(createPizza());
    }
    let response = await orderModel.aggregate([
      {
        $match: {
          size: "small",
        },
      },
      {
        $group: {
          _id: "$name",
          totalQuantity: {
            $sum: "$quantity",
          },
        },
      },
      {
        $sort: {
          totalQuantity: -1,
        },
      },
      {
        $group: {
          _id: 1,
          orders: {
            $push: "$$ROOT",
          },
        },
      },
      {
        $project: {
          _id: 0,
          orders: "$orders",
        },
      },
      {
        $merge: {
          into: "reports",
        },
      },
    ]);
    */
    //console.log(response);

    // console.log(await orderModel.find({ size: "medium", name: "Margarita" }));
    /*ordernar de mayor a menor
{
        $sort: {
          grade: -1,
        },
      },
*/
    /* const response = await studentModel.aggregate([
      { $group: { _id: "$group", avg_val: { $avg: "$grade" } } },
    ]);
    console.log(response);
    */

    const response = await studentModel.paginate(
      { gender: "F", group: "A" },
      { page: 1, limit: 3 }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

environment();
