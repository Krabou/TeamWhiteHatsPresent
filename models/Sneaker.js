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
    category: {
        type: Schema.Types.ObjectId,
        enum: ["men", "women", "kids"]
    },
    // id_tags: []  
    })

    const sneakerModel = mongoose.model("Sneaker", sneakerSchema)
    module.exports = sneakerModel;