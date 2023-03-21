export default class ToysDao {
  constructor() {
    this.data = [];
  }

  async getAll() {
    return this.data;
  }

  async save(obj) {
    this.data.push(obj);
    return obj;
  }
}
