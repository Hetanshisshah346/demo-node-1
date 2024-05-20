import mongoose from 'mongoose';

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/mydatabase';

mongoose.connect(mongoURI, {dbName: 'mydatabase'})
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });