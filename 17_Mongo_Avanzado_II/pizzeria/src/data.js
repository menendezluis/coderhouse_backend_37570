let studentsArray = [];

const flavours = [
  { name: "Margarita", price: 100 },
  { name: "Napolitana", price: 120 },
  { name: "Jamon y Morron", price: 150 },
  { name: "Calabresa", price: 130 },
  { name: "Muzarella", price: 110 },
  { name: "Fugazzeta", price: 140 },
  { name: "Capresse", price: 160 },
  { name: "Rucula", price: 170 },
  { name: "Provoleta", price: 180 },
  { name: "Hawaiana", price: 190 },
  { name: "4 Quesos", price: 200 },
];
const sizes = [
  { name: "small", price: 10 },
  { name: "medium", price: 30 },
  { name: "large", price: 50 },
];

const getRandomFlavour = () => {
  return flavours[Math.floor(Math.random() * flavours.length)];
};

const getRandomSize = () => {
  return sizes[Math.floor(Math.random() * sizes.length)];
};

const createPizza = () => {
  const flavour = getRandomFlavour();
  const size = getRandomSize();
  return {
    name: flavour.name,
    size: size.name,
    price: flavour.price + size.price,
    quantity: Math.floor(Math.random() * 10) + 1,
    date: new Date(),
  };
};

export default createPizza;

const names = [
  "Juan",
  "Pedro",
  "Maria",
  "Jose",
  "Luis",
  "Ana",
  "Luisa",
  "Carlos",
  "Rosa",
  "Ricardo",
  "Miguel",
  "Francisco",
  "Jorge",
  "Manuel",
];

const lastNames = [
  "Garcia",
  "Gonzalez",
  "Rodriguez",
  "Fernandez",
  "Lopez",
  "Martinez",
  "Sanchez",
  "Perez",
  "Gomez",
  "Martin",
  "Jimenez",
  "Ruiz",
  "Hernandez",
];

const randomNumberFromArray = (array) => {
  return Math.floor(Math.random() * array.length);
};

const groups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const genderList = ["M", "F"];

export const generateStudents = (quantity) => {
  for (let x = 0; x <= quantity; x++) {
    let first_name = names[randomNumberFromArray(names)];
    let last_name = lastNames[randomNumberFromArray(lastNames)];
    let email = `${first_name.toLowerCase()}.${last_name.toLowerCase()}@gmail.com`;
    let gender = genderList[randomNumberFromArray(genderList)];
    let grade = Math.floor(Math.random() * 10);
    let group = groups[randomNumberFromArray(groups)];
    let student = { first_name, last_name, email, gender, grade, group };
    studentsArray.push(student);
  }
  return studentsArray;
};
