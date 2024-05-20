import mongoose from 'mongoose';

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://127.0.0.1:27017/mydatabase';

const db = mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

  export default db