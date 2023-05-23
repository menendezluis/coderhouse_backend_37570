import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;
const requester = supertest("http://localhost:8080/");

console.log("Testing GET /");
describe("Api/Products/", () => {
  it("retornar 200", async () => {
    const response = await requester.get("api/products");
    expect(response.status).to.eql(200);
  });
  it("retorna un arreglo", async () => {
    const response = await requester.get("api/products");
    expect(response._body.products.docs).to.be.an("array");
  });
});
