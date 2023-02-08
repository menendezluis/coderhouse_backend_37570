import express from "express";
import mongoose from "mongoose";
import Loader from "./loader.js";
import { userModel } from "./models/user.model.js";
import { studentModel } from "./models/student.js";
import { courseModel } from "./models/course.js";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3131;
//const MONGO_URL = process.env.MONGO_URL;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const app = express();

app.use(express.json());
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));
const environment = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.pnpufdn.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    );
    console.log("Conectado a MongoDB");

    //Loader();
    /* let response = await userModel
      .find({ last_name: "Vinton" })
      .explain("executionStats");
    console.log(response);
    */
    /*await studentModel.create({
      first_name: "Juan",
      last_name: "Perez",
      email: "juan.perez@gmail.com",
      gender: "M",
    });*/
    await courseModel.create({
      title: "Curso de Backend",
      description: "Curso de Backend con Node.js y MongoDB",
      difficulty: 5,
      topics: ["Node.js", "MongoDB", "Express"],
      professor: "Mauricio",
    });

    //let student = await studentModel.find({ _id: "63dc44b25e42d3e0d35039fc" });
    // student[0].courses.push({ course: "63dc468219cc0f23d80607ee" });

    let student = await studentModel.findOne({
      _id: "63dc44b25e42d3e0d35039fc",
    });
    console.log(JSON.stringify(student, null, "\t"));
    //student.courses.push({ course: "63dc468219cc0f23d80607ee" });
    /*let response = await studentModel.updateOne(
      { _id: "63dc44b25e42d3e0d35039fc" },
      student
    );*/
    //console.log(student);
  } catch (error) {
    console.log(`Error al conectar a MongoDB: ${error}`);
  }
};

environment();
