// Import Prisma Client
import prisma from '@/lib/prisma';

// GET request to fetch themes
export async function GET(req) {
  try {
    const themes = await prisma.themes.findMany({
      orderBy: {
        created_at: 'desc', // Sort by created_at in descending order
      },
    });
    return new Response(JSON.stringify(themes), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching themes:', error);
    return new Response(
      JSON.stringify({ error: 'Error fetching themes' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// POST request to create a new theme
export async function POST(req) {
  try {
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

    // Insert the theme into the database
    const newTheme = await prisma.themes.create({
      data: {
        name,
        status,
      },
    });

    return new Response(
      JSON.stringify({
        message: 'Theme successfully created',
        theme_id: newTheme.id,
      }),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error creating theme:', error);
    return new Response(
      JSON.stringify({ error: 'Error creating theme', details: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
