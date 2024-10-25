import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectDB = async ()=>{
    try {
     let connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI }/${db_name}`)
     console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host} `);
     
    } catch (error) {
        console.log("database is not connected",error)
        process.exit(1)
    }
}


export default connectDB