import express from "express";
import twilio from "twilio";

const TWILIO_ACCOUNT_SID = "AC2592c1e42d40bf92d2ff795b3231c939";
const TWILIO_AUTH_TOKEN = "2c3d2bcf53d8115e0e6c26499c6f059d";
const TWILIO_PHONE_NUMBER = "+14017403731";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const client = twilio(
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NUMBER
);

app.post("/newwhats", async (req, res) => {
  let result = await client.messages.create({
    from: "whatsapp:+14155238886",
    to: "whatsapp:+34652259426",
    body: `Hola este es nuestro primer mensaje`,
  });

  res.send("whatsapp send sent");
});

app.listen(8080, () => {
  console.log(`Servidor escuchando en http://localhost:8080`);
});
