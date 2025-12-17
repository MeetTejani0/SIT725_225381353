const booksService = require("../services/books.service");

async function getAllBooks(req, res) {
  const books = booksService.getAllBooks();
  res.status(200).json(books);
}

async function getBookById(req, res) {
  const { id } = req.params;
  const book = booksService.getBookById(id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
}

module.exports = { getAllBooks, getBookById };
