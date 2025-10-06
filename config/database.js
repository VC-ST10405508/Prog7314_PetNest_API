//imports that will help us connect to our mongo db (freecodecamp.ord, 2024):
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
//connecting to the db (freecodecamp.ord, 2024):
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;

//freecodecamp.org. 2024. MERN Stack Tutorial with Deployment – Beginner's Course. [video online] Available at: https://www.youtube.com/watch?v=O3BUHwfHf84 [Accessed 5 October 2025].