import mongoose from "mongoose";
import { Schema } from "mongoose";

const foodSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})

const food = mongoose.model("food",foodSchema);

export default food;