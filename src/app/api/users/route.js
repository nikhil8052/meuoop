// src/app/api/users/route.js
// const { connection } = require('../lib/db'); // Import MySQL connection
// const bcrypt = require('bcrypt'); // For hashing the password
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';


export async function GET() {
  try {
    const flows = await prisma.Users.findMany({
      orderBy: {
        createdAt: 'desc', // Sort by created_at in descending order
      },
    });
    return new Response(JSON.stringify(flows), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error fetching flows' }), { status: 500 });
  }

}

// POST request to create a new user
export async function POST(req) {
  const { name, email, password, role } = await req.json();

  // Input validation
  if (!name || !email || !password || !role) {
    return new Response(
      JSON.stringify({ error: 'All fields are required' }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  try {
    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user using Prisma
    const newUser = await prisma.Users.create({
      data: {
        name,
        email,
        password: hashedPassword,
        type:role, // Ensure your Prisma schema has a `role` field
      },
    });

    return new Response(
      JSON.stringify({ message: 'User successfully created', userId: newUser.id }),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error inserting user:', error);
    return new Response(
      JSON.stringify({
        error: 'Error creating user',
        details: error.message,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}