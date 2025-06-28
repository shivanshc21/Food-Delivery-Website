import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://shivanshchaurasiya2004:shiv20042003@cluster0.rkxispa.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}