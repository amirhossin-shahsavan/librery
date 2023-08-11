function create() {}
const Book = require("./../models/Book");

exports.createBook = (req, res) => {
  const {
    title,
    description,
    releaseDate,
    author,
    category,
    pageCount,
    minage,
    active,
    tags,
    isAccepted,
  } = req.body;
  const book = new Book({
    title,
    author,
    category,
    description,
    releaseDate,
    pageCount,
    minage,
    active,
    tags,
    isAccepted,
  });
  book
    .save()
    .then((savedBook) => res.status(201).json(savedBook))
    .catch((err) => res.status(500).json({ error: err.message }));
};

// Get all books
exports.getBooks = (req, res) => {
  Book.find()
    .populate("category")
    .then((books) => res.status(200).json(books))
    .catch((err) => res.status(500).json({ error: err.message }));
};
