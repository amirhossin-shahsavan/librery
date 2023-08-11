const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
    minlenght: 1,
    lowercase: true,
  },
  icon: {
    type: String,
    required: true,
    minlenght: 1,
    lowercase: true,
  },
  order: {
    type: String,
    required: true,
    minlenght: 1,
    lowercase: true,
  },
  parentId: {
    type: String,
    required: true,
    minlenght: 1,
    lowercase: true,
  },
  parentId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

module.exports = mongoose.model("Category", categorySchema);
