import mongoose from "mongoose";

const mongoURI = 'mongodb://localhost:27017/mydatabase';

mongoose.connect(mongoURI, {retryWrites:true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });