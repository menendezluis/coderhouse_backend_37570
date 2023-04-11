import express from "express";
import twilio from "twilio";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const TWILIO_ACCOUNT_SID = "";
const TWILIO_AUTH_TOKEN = "";
const TWILIO_PHONE_NUMBER = "+";

const client = twilio(
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NUMBER
);

app.get("/sms", async (req, res) => {
  let result = await client.messages.create({
    from: TWILIO_PHONE_NUMBER,
    to: "+17722491117",
    body: "Este es un mensaje de prueba clase 37570",
  });

  res.send("SMS sent");
});

app.post("/customSMS", async (req, res) => {
  let { name, product } = req.body;
  let result = await client.messages.create({
    from: TWILIO_PHONE_NUMBER,
    to: "+17722491117",
    body: `Hola ${name} Gracias por tu compra. Tu producto es ${product}`,
  });

  res.send("SMS sent");
});

app.post("/whatsapp", async (req, res) => {
  let { name, product } = req.body;

  client.messages.create({
    body: `Hola ${name} Gracias por tu compra. Tu producto es ${product}`,
    from: "whatsapp:+14155238886",
    to: "whatsapp:+34652259426",
  });

  res.send("Whatsapp sent");
});

app.listen(8080, () => {
  console.log(`Servidor escuchando en http://localhost:8080`);
});
