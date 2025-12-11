const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost:27017/sit725db");

mongoose.connection.on("connected", () => {
  console.log("MongoDB is now Connected...");
});

const CardSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  link: String,
});

const Card = mongoose.model("Card", CardSchema);

app.get("/api/cards", async (req, res) => {
  const cards = await Card.find({});
  res.json({ statusCode: 200, data: cards, message: "Success" });
});

app.post("/api/cards", async (req, res) => {
  const cardData = req.body;
  const newCard = new Card(cardData);

  await newCard.save();
  res.json({ statusCode: 200, message: "Card Saved" });
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
