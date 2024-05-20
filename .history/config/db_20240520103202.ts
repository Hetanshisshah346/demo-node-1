import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URL:any = process.env.MONGOSE_URL
console.log(MONGO_URL)
const db = mongoose.connect(MONGO_URL, {retryWrites: true, dbName: "Demo"}).then(() => {
    console.log("Database connected successfully")
}).catch((err:any) => {
    console.log(err)
})
export default db