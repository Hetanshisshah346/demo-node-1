import mongoose from "mongoose";

const MONGO_URL: any = process.env.MONGOSE_URL;
const db = mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
export default db;