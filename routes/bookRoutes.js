const express = require("express");
const app = express();
const bookController = require("../controllers/book/bookController");
const bookRouter = express.Router();

bookRouter.get("/book", bookController.getallBooks);

bookRouter.post("/book", bookController.createBook);

bookRouter.get("/book/:bookId", bookController.getBook);

bookRouter.put("/book/:bookId", bookController.updateBook);

app.delete("/book/:bookId", bookController.deleteBook);

module.exports = bookRouter;
