const mongoose = require('mongoose');

const Schema = new mongoose.Schema;

    const category = new Schema({
        name:{
            type: String,
            required:true,
        },
        category:{
            type: Schema.type.objectId,
            ref: "category",
        },
        order:{
            type:String,
        
        },
        active:{
            type: Boolean,

        }
    })
const categoryModel = mongoose.model('category', UserSchema);
module.exports = categoryModel;