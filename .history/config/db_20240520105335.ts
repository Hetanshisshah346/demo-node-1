import mongoose from "mongoose";

const MONGO_URL = process.env.MONGOSE_URL
const db = mongoose.connect()