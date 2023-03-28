import { Router } from "express";
import Products from "../dao/factory.js";
import ProductRepository from "../repository/Products.repository.js";
const router = Router();

const products = new Products();
const productRepository = new ProductRepository(products);

router.get("/", async (req, res) => {
  const data = await productRepository.getProducts();
  res.json(data);
});

router.post("/", async (req, res) => {
  const data = await productRepository.createProduct(req.body);
  res.json(data);
});

router.put("/:id", async (req, res) => {
  const data = await productRepository.modifyProduct(req.params.id, req.body);
  res.json(data);
});

router.delete("/:id", async (req, res) => {
  const data = await productRepository.deleteProduct(req.params.id);
  res.json(data);
});

export default router;
