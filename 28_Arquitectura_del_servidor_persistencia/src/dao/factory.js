import mongoose from "mongoose";
import config from "../config/config.js";

export let Contacts;
const persistence = process.argv[2];
//switch (config.persistence) {
switch (persistence) {
  case "MONGO":
    console.log("aqui uno");
    const connection = mongoose.connect("mongodb://localhost:27017/contacts", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { default: ContactsMongo } = await import("./mongo/contact.mongo.js");
    Contacts = ContactsMongo;
    break;
  case "MEMORY":
    console.log("aqui dos");
    const { default: ContactMemory } = await import(
      "./memory/contact.memory.js"
    );
    Contacts = ContactMemory;
    break;
}

export default Contacts;
