import { Router } from "express";
//import ContactDto from "../dao/DTOs/contact.dto.js";
//import Contacts from "../dao/memory/contact.memory.js";
//import Contacts from "../dao/mongo/contact.mongo.js";
import Contacts from "../dao/factory.js";
import ContactRepository from "../repository/Contacts.repository.js";
const router = Router();

const contacts = new Contacts();
const contactRepository = new ContactRepository(contacts);

router.get("/", async (req, res) => {
  //const data = await contacts.get();
  const data = await contactRepository.getContacts();
  res.json(data);
});

router.post("/", async (req, res) => {
  const { name, lastname, phone } = req.body;
  const data = await contactRepository.createContact({
    name,
    lastname,
    phone,
  });
  res.json(data);
});

router.put("/:id", async (req, res) => {
  const data = await contactRepository.modifyContact(req.params.id, req.body);
  res.json(data);
});

router.delete("/:id", async (req, res) => {
  const data = await contactRepository.deleteContact(req.params.id);
  res.json(data);
});

export default router;
