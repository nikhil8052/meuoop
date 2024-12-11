// Import necessary modules
import prisma from '@/lib/prisma';


export async function GET() {

  try {
    const flows = await prisma.elements.findMany({
      orderBy: {
        created_at: 'desc', // Sort by created_at in descending order
      },
    });
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
    // Insert the flow into the `flows` table
    const newFlow = await prisma.elements.create({
      data: {
        name,
        status,
      },
    });

    return new Response(
      JSON.stringify({
        message: 'Flow successfully created',
        flow_id: newFlow.id, // Prisma returns the inserted `id`
      }),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error creating flow:', error);
    return new Response(
      JSON.stringify({
        error: 'Error creating flow',
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