const express = require("express");
const app = express();
const bookController = require("../controller/bookController");
const bookRouter = express.Router();

bookRouter.get("/allbooks", bookController.getallBooks);

bookRouter.get("/book", bookController.getBook);

bookRouter.post("/book", bookController.createBook);

bookRouter.put("/book", bookController.updateBook);

app.delete("/book", bookController.deleteBook);

module.exports = bookRouter;
