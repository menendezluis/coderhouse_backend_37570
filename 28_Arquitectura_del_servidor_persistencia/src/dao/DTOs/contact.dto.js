export default class ContactDto {
  constructor(contact) {
    this._id = contact._id;
    this.name = contact.name + " " + contact.lastname;

    this.phone = contact.phone ? contact.phone.split("-").join("") : "";
  }
}
