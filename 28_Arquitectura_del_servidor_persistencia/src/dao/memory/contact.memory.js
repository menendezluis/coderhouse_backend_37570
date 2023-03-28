export default class Products {
  constructor() {
    this.data = [];
  }
  get = async () => {
    return this.data;
  };
  create = async (product) => {
    product._id = this.data.length + 1;
    this.data.push(product);
    return product;
  };
  modify = async (id, product) => {
    const index = this.data.findIndex((c) => c.id === id);
    this.data[index] = product;
    return product;
  };
  delete = async (id) => {
    const index = this.data.findIndex((c) => c.id === id);
    this.data.splice(index, 1);
    return { id };
  };
}
