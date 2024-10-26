import { NextResponse } from 'next/server';

// Middleware function
export function middleware(req) {
  // Extract the current pathname
  const { pathname } = req.nextUrl;

  // Example: Check if user is authenticated
  const isAuthenticated = req.cookies.get('token'); // You can customize this logic

  // If the user is trying to access an admin page
  if (pathname.startsWith('/admin')) {
    // If the user is not authenticated, redirect to login
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Specify the paths where the middleware should run
export const config = {
  matcher: ['/admin/:path*'], // Apply middleware to all admin routes
};
