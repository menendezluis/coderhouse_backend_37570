import express from "express";
import contactsRouter from "./routes/contacts.routes.js";
import productsRouter from "./routes/product.routes.js";
const app = express();

app.use(express.json());

app.use("/contacts", contactsRouter);
app.use("/products", productsRouter);

app.listen(3000);
