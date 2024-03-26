import mongoose  from "mongoose";
import dotenv from "dotenv";

dotenv.config()
const {MONGO_URL} = process.env;

const connectMongoDB = async () => {
    try {
        await mongoose.connect(MONGO_URL!);
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.log(error);
    }
};
 
export default connectMongoDB;