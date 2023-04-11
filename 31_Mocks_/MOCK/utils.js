import { faker } from "@faker-js/faker";
import crypto from "crypto";

faker.locale = "es";

export const generateUser = () => {
  let numOfProducts = parseInt(
    faker.random.numeric(1, {
      bannerDigits: ["0"],
    })
  );
  let products = [];
  for (let i = 0; i < numOfProducts; i++) {
    products.push(generateProduct());
  }
  return {
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    sex: faker.name.sex(),
    birthDate: faker.date.birthdate(),
    phone: faker.phone.number(),
    products,
    emailL: faker.internet.email(),
    id: faker.database.mongodbObjectId(),
    jobTitle: faker.name.jobTitle(),
    userRole: randomUserRole(),
    premium: Math.floor(Math.random() * 2) === 1 ? true : false,
  };
};

export const generateProduct = () => {
  return {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    department: faker.commerce.department(),
    stock: faker.random.numeric(1),
    id: faker.database.mongodbObjectId(),
    image: faker.image.image(),
    description: faker.commerce.productDescription(),
    code: crypto.randomBytes(16).toString("hex").substring(0, 10),
  };
};

export const randomUserRole = () => {
  let roles = ["admin", "user", "guest"];
  return roles[Math.floor(Math.random() * roles.length)];
};
