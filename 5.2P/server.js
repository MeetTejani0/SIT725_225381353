const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const booksRoutes = require("./routes/books.routes");
app.use("/api/books", booksRoutes);

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
