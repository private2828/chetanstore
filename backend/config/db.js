// creating logic to connect with database

import mongoose from "mongoose";

export const connectDB = async()=> {
    await mongoose.connect('mongodb+srv://chetanmallah28:A3867700@cluster0.29bji4n.mongodb.net/Food-Delivery').then(()=>console.log("DB Connected"));
}