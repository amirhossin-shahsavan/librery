const express = require("express");
const app = express();
const bookController = require("../controllers/book/bookController");
const checkToken = require("../middleware/checkToken");
const checkAccess = require("../middleware/checkAccess");
const bookRouter = express.Router();

bookRouter.get("/book", bookController.getallBooks);

bookRouter.post(
  "/book",
  checkToken.verifyToken,
  checkAccess.checkAdmin,
  bookController.createBook
);

bookRouter.get("/book/:bookId", bookController.getBook);

bookRouter.put(
  "/book/:bookId",
  checkToken.verifyToken,
  bookController.updateBook
);

bookRouter.delete(
  "/book/:bookId",
  checkToken.verifyToken,
  bookController.deleteBook
);

module.exports = bookRouter;
