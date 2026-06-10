import mongoose from "mongoose";

export const connectDB = async () => {
    await  mongoose.connect('mongodb+srv://fooduser:Food1234@cluster0.sxrax6m.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}