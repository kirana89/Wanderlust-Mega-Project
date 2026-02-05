import mongoose from 'mongoose';
import { MONGODB_URI } from './utils.js';

export default async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(`Database connected: ${MONGODB_URI}`);
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }

  mongoose.connection.on('error', (err) => {
    console.error('MongoDB runtime error:', err.message);
  });
}
