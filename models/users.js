const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const peopleSchema = new Schema({
  cellPhone: {
    type: String,
    required: true,
    unique: true,
    minlenght: 1,
    lowercase: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  family:{
    type:String,
    required:true,
    minlength: 3,
    maxlength: 255,
  },
  role:{
    type:String,
    enum:['admin','user']  

  },

  age:{
    type:Number,
    required:true,
  },
  password: {
    type: String,
    required: true,
  },
  brithDate:{
    type:String
  },
  active:{
    type:String,
    enum:['active','inActice']  
  },
  createdAt:Date,
  updatedAt:{
    type:Date,
    default:Date.now
  },
  deletedAt:{
    type:Date
  }
  
});

module.exports = mongoose.model("People", peopleSchema);