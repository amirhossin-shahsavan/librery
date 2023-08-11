const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
    minlenght: 1,
    lowercase: true,
  },
  title: {
    type: String,
    required: true,
    minlenght: 1,
    lowercase: true,
  },
  description: {
    type: String,
    required: true,
    minlenght: 1,
    lowercase: true,
  },
  releaseDate: {
    type: String,
    required: true,
    minlenght: 1,
    lowercase: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  pageCount: {
    type: String,
    required: true,
    minlenght: 1,
    lowercase: true,
  },
  author: {
    type: String,
    required: true,
    minlenght: 1,
    lowercase: true,
  },
  minage: {
    type: String,
    required: true,
    minlenght: 1,
    lowercase: true,
  },
  active: {
    type: String,
    required: true,
    minlenght: 1,
    lowercase: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
