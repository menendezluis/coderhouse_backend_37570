import { Router } from "express";

const router = Router();

const mascotas = [];

const petNames = ["Firulais", "Pelusa", "Pulga", "Pulgoso", "Fido"];
const petSpecie = ["Perro", "Gato", "Perro", "Perro", "Perro"];

petNames.forEach((pet, index) => {
  let nombre = pet;
  let specie = petSpecie[index];
  //console.log(mascota);
  mascotas.push({
    nombre: nombre,
    specie: specie,
    adopted: false,
  });
});

router.param("pet", (req, res, next, pet) => {
  let isValidPet = (validPet) => {
    let myRegex = /[a-zA-Z%20]/;
    return myRegex.test(validPet);
  };
  if (isValidPet(pet)) {
    const myPet = mascotas.find((mascota) => mascota.nombre === pet);
    if (myPet) {
      req.pet = myPet;
      next();
    } else {
      res.status(404).send("Pet not found");
    }
  } else {
    res.status(400).send("Pet name is not valid");
  }
});

router.get("/:pet", (req, res) => {
  const { pet } = req.params;
  if (pet) {
    res.send(req.pet);
  } else {
    res.send(mascotas);
  }
});

router.post("/", (req, res) => {
  const { nombre, specie, adopted } = req.body;
  if (nombre && specie) {
    mascotas.push({
      nombre: nombre,
      specie: specie,
      adopted: adopted,
    });
    res.status(201).send("Pet created");
  } else {
    res.status(400).send("Pet name and specie are required");
  }
});

router.put("/:pet", (req, res) => {
  const { pet } = req.params;

  const { nombre, specie, adopted } = req.body;

  if (!nombre || !specie || !adopted) {
    res.status(400).send("Pet name, specie and adopted are required");
  } else {
    if (pet) {
      req.pet.adopted = true;
      let myIndex = mascotas.findIndex((mascota) => mascota.nombre === pet);
      mascotas.splice(myIndex, 1, {
        nombre: nombre,
        specie: specie,
        adopted: adopted,
      });
      res.send(mascotas);
    }
  }
});

export default router;
