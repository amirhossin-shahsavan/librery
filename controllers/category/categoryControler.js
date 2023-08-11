const Category = require("../../models/Category");

exports.createCategory = (req, res) => {
  const { name, icon, order, parentId, active } = req.body;
  const Category = new Category({
    name,
    icon,
    order,
    parentId,
    active,
  });
   Category
    .save()
    .then((savedCategory) => res.status(201).json(savedCategory))
    .catch((err) => res.status(500).json({ error: err.message }));
};

exports.getallCategorys = (req, res) => {
  Category.find()
    .populate("category")
    .then((Categorys) => res.status(200).json(Categorys))
    .catch((err) => res.status(500).json({ error: err.message }));
};

exports.getCategory = (req, res) => {
  const { CategoryId } = req.params;
  Category.findById(CategoryId)
    .populate("category")
    .then((Category) => {
      if (Category) {
        res.status(200).json(Category);
      } else {
        res.status(404).json({ message: "Category not found" });
      }
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

exports.updateCategory = (req, res) => {
  const { CategoryId } = req.params;
  const {
    name,
    icon,
    order,
    parentId,
    active,
  } = req.body;
  Category.findByIdAndUpdate(
    CategoryId,
    {
      name,
      icon,
      order,
      parentId,
      active,
    },
    { new: true }
  )
    .then((updatedCategory) => {
      if (updatedCategory) {
        res.status(200).json(updatedCategory);
      } else {
        res.status(404).json({ message: "Category not found" });
      }
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

exports.deleteCategory = (req, res) => {
  const { CategoryId } = req.params;
  Category.findByIdAndRemove(CategoryId)
    .then((deletedCategory) => {
      if (deletedCategory) {
        res.status(200).json({ message: 'Category deleted successfully' })
      } else {
        res.status(404).json({ message: "Category not found" });
      }
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

// exports.getCategorys = (req, res) => {
//   Category.find()
//     .populate("category")
//     .then((Categorys) => res.status(200).json(Categorys))
//     .catch((err) => res.status(500).json({ error: err.message }));
// };
