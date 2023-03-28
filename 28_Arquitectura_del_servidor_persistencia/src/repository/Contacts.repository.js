import ContactDto from "../dao/DTOs/contact.dto.js";

export default class ContactRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getContacts = async () => {
    const result = await this.dao.get();
    return result;
  };

  createContact = async (contact) => {
    let contactToInsert = new ContactDto(contact);
    let result = await this.dao.create(contactToInsert);
    return result;
  };

  modifyContact = async (id, contact) => {
    let result = await this.dao.modify(id, contact);
    return result;
  };
  deleteContact = async (id) => {
    let result = await this.dao.delete(id);
    return result;
  };
}
