// src/app/api/users/route.js
import { connectToDatabase } from '../lib/mongodb';
import User from '../models/User';

export async function GET(req) {
  try {
    await connectToDatabase(); // Establish the database connection
    const users = await User.find(); // Fetch users from the database

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response(JSON.stringify({
      error: 'Error fetching users',
      details: error.message,
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
