const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sneakerSchema = new Schema ({  
    image: {
        type: String,
        default:""
    },
    name: String,  
    ref: String,  
    size: Number,  
    description: String,  
    price: Number,  
    category: String [men, women, kids],  
    id_tags: [ObjectId]  
    })

    const sneakerModel = mongoose.model("sneaker", sneakerSchema)
    module.exports = sneakerModel;