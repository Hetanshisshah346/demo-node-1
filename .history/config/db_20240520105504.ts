import mongoose from "mongoose";

const MONGO_URL: any = 'mongodb://127.0.0.1:27017/mydatabase';
const db = mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
export default db;