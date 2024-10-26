// src/app/api/auth/login.js

import clientPromise from '@/lib/mongodb';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  const client = await clientPromise;
  const db = client.db('your_database_name');
  
  const { username, password } = await req.json();
  
  // Validate user credentials (this is just an example, use hashed passwords in production)
  const user = await db.collection('users').findOne({ username });
  
  if (!user || user.password !== password) {
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
  }
  
  // Generate JWT token
  const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  
  return new Response(JSON.stringify({ token }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
}
