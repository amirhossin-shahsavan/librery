const Book = require("./../models/Book");

exports.createBook = (req, res) => {
  const {
    title,
    description,
    releaseDate,
    categoryId,
    pageCount,
    author,
    minage,
    active,
  } = req.body;
  const book = new Book({
    title,
    description,
    releaseDate,
    categoryId,
    pageCount,
    author,
    minage,
    active,
  });
  book
    .save()
    .then((savedBook) => res.status(201).json(savedBook))
    .catch((err) => res.status(500).json({ error: err.message }));
};

exports.getallBooks = (req, res) => {
  Book.find()
    .populate("category")
    .then((books) => res.status(200).json(books))
    .catch((err) => res.status(500).json({ error: err.message }));
};

exports.getBook = (req, res) => {
  const { bookId } = req.params;
  Book.findById(bookId)
    .populate("category")
    .then((book) => {
      if (book) {
        res.status(200).json(book);
      } else {
        res.status(404).json({ message: "Book not found" });
      }
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

exports.updateBook = (req, res) => {
  const { bookId } = req.params;
  const {
    title,
    description,
    releaseDate,
    categoryId,
    pageCount,
    author,
    minage,
    active,
  } = req.body;
  Book.findByIdAndUpdate(
    bookId,
    {
      title,
      description,
      releaseDate,
      categoryId,
      pageCount,
      author,
      minage,
      active,
    },
    { new: true }
  )
    .then((updatedBook) => {
      if (updatedBook) {
        res.status(200).json(updatedBook);
      } else {
        res.status(404).json({ message: "Book not found" });
      }
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

exports.deleteBook = (req, res) => {
  const { bookId } = req.params;
  Book.findByIdAndRemove(bookId)
    .then((deletedBook) => {
      if (deletedBook) {
        res.status(200).json({ message: "Book deleted successfully" });
      } else {
        res.status(404).json({ message: "Book not found" });
      }
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};
