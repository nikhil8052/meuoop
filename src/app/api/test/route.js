// src/app/api/test/route.js

import mongoose from 'mongoose';

// Connection status variable
let isConnected = false;

export async function GET(req) {
  // Check if already connected
  if (isConnected) {
    return new Response(JSON.stringify({ message: 'Already connected to MongoDB.' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Attempt to connect to MongoDB
  try {
    const uri = process.env.MONGODB_URI;

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true; // Set connection status
    return new Response(JSON.stringify({ message: 'Successfully connected to MongoDB.' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return new Response(JSON.stringify({ error: 'Error connecting to MongoDB', details: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
