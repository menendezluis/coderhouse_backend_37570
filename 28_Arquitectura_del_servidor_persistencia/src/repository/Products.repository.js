export default class productRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getProducts = async () => {
    const result = await this.dao.get();
    return result;
  };

  createProduct = async (product) => {
    let result = await this.dao.create(product);
    return result;
  };

  modifyProduct = async (id, product) => {
    let result = await this.dao.modify(id, product);
    return result;
  };
  deleteProduct = async (id) => {
    let result = await this.dao.delete(id);
    return result;
  };
}
