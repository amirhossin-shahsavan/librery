const express = require("express");
const app = express();
const categoryController = require("../controllers/book/bookController");
const categoryRouter = express.Router();

categoryRouter.get("/book", bookController.getallBooks);

categoryRouter.post("/book", bookController.createBook);

categoryRouter.get("/book/:bookId", bookController.getBook);

categoryRouter.put("/book/:bookId", bookController.updateBook);

categoryRouter.delete("/book/:bookId", bookController.deleteBook);

module.exports = categoryRouter;
