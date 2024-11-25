// Import necessary modules
const { connection } = require('../lib/db'); // Adjust path as needed
import prisma from '@/lib/prisma';


export async function GET(req) {


  try {
    const flows = await prisma.categories.findMany();
    return new Response(JSON.stringify(flows), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error fetching flows' }), { status: 500 });
  }

}

// POST request to create a new flow
export async function POST(req) {
  const { name, status } = await req.json();

  // Input validation
  if (!name || !status) {
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
    // Insert the new category into the `categories` table
    const newCategory = await prisma.categories.create({
      data: {
        name,
        status,
      },
    });

    return new Response(
      JSON.stringify({
        message: 'Category successfully created',
        category_id: newCategory.id, // Prisma returns the inserted `id`
      }),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error creating category:', error);
    return new Response(
      JSON.stringify({
        error: 'Error creating category',
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