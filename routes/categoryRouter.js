const express = require("express");
const app = express();
const categoryController = require("../controllers/book/bookController");
const categoryRouter = express.Router();

categoryRouter.get("/category", categoryController.getallCategorys);

categoryRouter.post("/category", categoryController.createCategory);

categoryRouter.get("/category/:categoryId", categoryController.getCategory);

categoryRouter.put("/category/:categoryId", categoryController.updateCategory);

categoryRouter.delete("/category/:categoryId", categoryController.deleteCategory);

module.exports = categoryRouter;

createCategory