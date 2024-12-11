// src/middleware/middleware.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken'; // Install this package to handle JWT

// Define middleware for checking authentication and roles
export async function middleware(req) {
  const token = req.cookies.token; // Assuming token is stored in cookies

  if (!token) {
    return NextResponse.redirect('/login'); // Redirect to login if no token
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your secret key
    const role = decoded.role; // Assuming role is stored in the token

    // Check if the user is an admin
    if (req.nextUrl.pathname.startsWith('/admin') && role !== 'admin') {
      return NextResponse.redirect('/unauthorized'); // Redirect if not admin
    }

    // Check if the user is a regular user
    if (req.nextUrl.pathname.startsWith('/user') && role !== 'user') {
      return NextResponse.redirect('/unauthorized'); // Redirect if not user
    }

    return NextResponse.next(); // Continue the request if authenticated
  } catch (error) {
    console.log(error)
    return NextResponse.redirect('/login'); // Redirect to login if token is invalid
  }
}

// Define paths where the middleware should run
export const config = {
  matcher: ['/admin/*', '/user/*'], // Apply the middleware to admin and user routes
};
