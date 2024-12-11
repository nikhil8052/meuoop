// Import necessary modules

import prisma from '@/lib/prisma';


export async function GET() {

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
    const { name, status, selectedThemes, selectedPages, selectedElements, screen_type , mobileTemUrl , desktopTemUrl } = await req.json();

    // Input validation
    if (!name || !status || !selectedThemes || !selectedPages || !selectedElements || !screen_type) {
      return new Response(
        JSON.stringify({ error: 'All fields are required.' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    var type ='landing_page';
    // Create the flow
    const newFlow = await prisma.flows.create({
      data: {
        type,
        total_images: 0, // Default to 0 as in your original query
        name,
        status,
        screen_type
      },
    });

    console.log(newFlow, " New flow is creatd man ")


    // Insert the themes 
    const themesData = selectedThemes.map((theme) => ({
      flow_id: newFlow.id,
      theme_id: theme.value,
      status: 1
    }))


    await prisma.flow_themes.createMany({
      data: themesData,
    });


    // // Insert the pages 
    const pagesData = selectedPages.map((page) => ({
      flow_id: newFlow.id,
      page_id: page.value,
      status: 1
    }))


    await prisma.flow_pages.createMany({
      data: pagesData,
    });


    // Store the images now 

    const newImage = await prisma.images.create({
      data: {
        flow_id: newFlow.id,
        url: mobileTemUrl,
        order_id: 0,
        status: "public",
      },
    });

    console.log(newImage)

    const newImage1 = await prisma.images.create({
      data: {
        flow_id: newFlow.id,
        url: desktopTemUrl,
        order_id: 0,
        status: "public",
      },
    });
    console.log(newImage1)



    return new Response(
      JSON.stringify({
        message: 'Flow successfully created and categories added.',
        flowId: newFlow.id,
        code:200
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
