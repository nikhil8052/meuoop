// Import necessary modules
const { connection } = require('../lib/db'); // Adjust path as needed

import prisma from '@/lib/prisma';


export async function GET(req) {

  try {
    const flows = await prisma.flows.findMany({
      orderBy: {
        created_at: 'desc', // Sort by created_at in descending order
      },
    });

    return new Response(JSON.stringify(flows), { status: 200 });
  } catch (error) {
    console.error('Error fetching flows:', error);
    return new Response(
      JSON.stringify({ error: 'Error fetching flows' }),
      { status: 500 }
    );
  }
}
export async function POST(req) {
  try {
    const { name, description, type, status, categories } = await req.json();

    // Input validation
    if (!name || !description || !type || !status || !categories || categories.length === 0) {
      return new Response(
        JSON.stringify({ error: 'All fields are required and categories cannot be empty' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Create the flow
    const newFlow = await prisma.flows.create({
      data: {
        type,
        total_images: 0, // Default to 0 as in your original query
        name,
        description,
        status,
      },
    });

    console.log(newFlow , " New flow is creatd man ")
    // Insert selected categories into the `flow_categories` table
    const flowCategoriesData = categories.map((category) => ({
      flow_id: newFlow.id,
      category_id: category.value, // Assuming `category.value` contains the category ID
      status: 1, // Assuming status 1 means active
    }));

    await prisma.flow_categories.createMany({
      data: flowCategoriesData,
    });

    return new Response(
      JSON.stringify({
        message: 'Flow successfully created and categories added',
        flowId: newFlow.id,
        categoriesAdded: flowCategoriesData.length,
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
      JSON.stringify({ error: 'Error creating flow', details: error.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}


// PUT request to update a flow
export async function PUT(req) {
  const { flowId, name, description, type, status, screenType } = await req.json();

  // Validate required fields
  if (!flowId) {
    return new Response(JSON.stringify({ error: 'flowId is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Build the query and dynamically include only provided fields
  const updates = [];
  const params = [];

  if (name) {
    updates.push('name = ?');
    params.push(name);
  }

  if (description) {
    updates.push('description = ?');
    params.push(description);
  }

  if (type) {
    updates.push('type = ?');
    params.push(type);
  }

  if (status) {
    updates.push('status = ?');
    params.push(status);
  }

  if (screenType) {
    updates.push('screen_type = ?');
    params.push(screenType);
  }

  if (updates.length === 0) {
    return new Response(JSON.stringify({ error: 'No fields to update' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  params.push(flowId); // Add flowId to the params at the end for the WHERE clause

  const query = `UPDATE flows SET ${updates.join(', ')} WHERE id = ?`;

  return new Promise((resolve, reject) => {
    connection.query(query, params, (err, results) => {
      if (err) {
        console.error('Error updating flow:', err);
        return reject(
          new Response(
            JSON.stringify({
              error: 'Error updating flow',
              details: err.message,
            }),
            {
              status: 500,
              headers: { 'Content-Type': 'application/json' },
            }
          )
        );
      }

      if (results.affectedRows === 0) {
        return resolve(
          new Response(
            JSON.stringify({ error: 'Flow not found or no changes made' }),
            {
              status: 404,
              headers: { 'Content-Type': 'application/json' },
            }
          )
        );
      }

      resolve(
        new Response(
          JSON.stringify({ message: 'Flow successfully updated' }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          }
        )
      );
    });
  });
}
