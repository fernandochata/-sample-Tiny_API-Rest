import mongoose from "mongoose";
import 'dotenv/config';

const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected...");
    } catch (err) {
        console.error(err.message);
    }
}

export default connectDB;