// src/lib/mongodb.js
import mongoose from 'mongoose';

let isConnected = false; // Track the connection status

export async function connectToDatabase() {
  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    const uri = process.env.MONGODB_URI;

    // Connect to MongoDB only if not already connected
    await mongoose.connect(uri);
    isConnected = true; // Set the connection status to true
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}
