import mongoose from "mongoose";

const MONGO_URL = 'mongodb://127.0.0.1:27017/mydatabase';
const db = mongoose
  .connect(`${process.env.MONGOSE_URL}`)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
export default db;