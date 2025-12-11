const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sit725db");

const Card = mongoose.model("Card", new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  link: String,
}));

Card.insertMany([
  {
    title: "Pokémon Shield",
    image: "image/pokemon_shield.jpg",
    description: "Pokémon Sword and Pokémon Shield are 2019 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo Switch console.",
    link: "https://swordshield.pokemon.com/en-au/"
  },
  {
    title: "The Legend of Zelda: Tears of the Kingdom",
    image: "image/legend_of_zelda_totk.jpg",
    description: "The Legend of Zelda: Tears of the Kingdom is a 2023 action-adventure game developed by Nintendo EPD for the Nintendo Switch.",
    link: "https://www.nintendo.com/au/games/nintendo-switch/the-legend-of-zelda-tears-of-the-kingdom/?srsltid=AfmBOoogIMaxXLzIFHogaXp-EhovgHPelTtnFbh1k58CpxBx_1J0Qh_X"
  },
 {
    title: "Pokémon Scarlet",
    image: "image/pokemon_scarlet.jpg",
    description: "Pokémon Scarlet and Pokémon Violet are 2022 role-playing video games developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch.",
    link: "https://scarletviolet.pokemon.com/en-au/"
  },
  {
    title: "Kirby and the Forgotten Land",
    image: "image/kirby.jpg",
    description: "Kirby and the Forgotten Land is a 2022 action-platform game developed by HAL Laboratory and published by Nintendo for the Nintendo Switch.",
    link: "https://www.nintendo.com/au/games/nintendo-switch/kirby-and-the-forgotten-land/?srsltid=AfmBOoqTF-7enPEQCN3T2FWAA99O-f5-sNdttCH8dYJFbBn4help_LTg"
  }
]).then(() => {
  console.log("Data added");
  process.exit();
});
