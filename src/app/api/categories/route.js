// src/pages/api/categories.js
import { connectToDatabase } from '../lib/mongodb';

import Category from '../models/Category';

export async function GET(req) {
    try {
      await connectToDatabase(); 
      const data = await Category.find(); 
  
      return new Response(JSON.stringify(data), {
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