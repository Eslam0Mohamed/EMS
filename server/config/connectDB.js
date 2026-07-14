import mongoose from "mongoose";

export const connectDB = async()=>{
try {
   await mongoose.connect(process.env.MONGO_URI)
   console.log("connected DB Now");
   
} catch (error) {
    console.log("Connection with DB Failed " + error.message);
}
}