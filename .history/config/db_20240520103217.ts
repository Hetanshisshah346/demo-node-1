import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URL: any = process.env.MONGO_URL;

const db = mongoose
  .connect(MONGO_URL, { retryWrites: true, dbName: "smart_irrigation" })
  .then(() => {
    console.log("<<<<---- Database connected successfully...");
  })
  .catch((err) => {
    console.log(err);
  });

export default db;
