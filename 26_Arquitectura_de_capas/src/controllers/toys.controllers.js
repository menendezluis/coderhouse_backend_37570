import { TOYSDAO } from "../dao/index.js";

export const saveToy = async (req, res) => {
  const toy = req.body;
  await TOYSDAO.save(toy);
  res.send(toy);
};

export const getToys = async (req, res) => {
  res.send(await TOYSDAO.getAll());
};
