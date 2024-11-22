// Import necessary modules
const { connection } = require('../lib/db'); // Adjust path as needed


export async function GET(req) {

  const query = `select * from flows`;
  return new Promise((resolve, reject )=>{
    connection.query(query,[],(err,results)=>{
      if( err ){

      }

      resolve(
        new Response(JSON.stringify(results), {
          status:201, 
          headers:{
            'Content-Type':'application/json'
          }
        })
      )
    })

  })


}
// POST request to create a new flow
export async function POST(req) {
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

  // Insert values into `flows`, with `id` auto-incremented by the database
  const flowQuery = `INSERT INTO flows (type, total_images, name, description, status) VALUES (?, 0, ?, ?, ?)`;

  return new Promise((resolve, reject) => {
    connection.query(flowQuery, [type, name, description, status], (err, flowResults) => {
      if (err) {
        console.error('Error inserting flow:', err);
        return reject(
          new Response(
            JSON.stringify({
              error: 'Error creating flow',
              details: err.message,
            }),
            {
              status: 500,
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
        );
      }

      const flow_id = flowResults.insertId;

      // Now, insert selected categories into the `flow_categories` table
      const categoryQuery = `INSERT INTO flow_categories (flow_id, category_id, status) VALUES ?`;
      const categoryValues = categories.map((categoryId) => [flow_id, categoryId.value, 1]); // Assuming status 1 means active

      connection.query(categoryQuery, [categoryValues], (categoryErr, categoryResults) => {
        if (categoryErr) {
          console.error('Error inserting categories:', categoryErr);
          return reject(
            new Response(
              JSON.stringify({
                error: 'Error inserting categories',
                details: categoryErr.message,
              }),
              {
                status: 500,
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            )
          );
        }

        resolve(
          new Response(
            JSON.stringify({
              message: 'Flow successfully created and categories added',
              flow_id: flow_id,
              categories: categoryResults.affectedRows, // Shows how many categories were inserted
            }),
            {
              status: 201,
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
        );
      });
    });
  });
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
