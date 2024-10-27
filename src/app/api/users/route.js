// src/app/api/users/route.js
import { connectToDatabase } from '../lib/mongodb';
import User from '../models/User';

export async function GET() {
  try {
    await connectToDatabase(); 
    const users = await User.find(); 

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

export async function POST(req) {
  try {
    await connectToDatabase();

    const { username, email, password, user_type } = await req.json();

    // Create a new User document
    const newUser = new User({
      name: username,
      email,
      password,
      type: user_type,
      status: 1, // assuming default status for new users
    });

    const savedUser = await newUser.save();

    return new Response(JSON.stringify(savedUser), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(JSON.stringify({
      error: 'Error creating user',
      details: error.message,
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
