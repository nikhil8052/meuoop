// lib/auth.js

import jwt from 'jsonwebtoken';

export function authenticate(req) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    throw new Error('No token provided');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (err) {
    throw new Error(err );
  }
}
