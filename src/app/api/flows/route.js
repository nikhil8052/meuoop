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


  const { name, description, type, status } = await req.json();

  // Input validation
  if (!name || !description || !type || !status) {
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

  // Insert values into `flows`, with `id` auto-incremented by the database
  const query = `INSERT INTO flows (type, total_images, name, description, status) VALUES (?, 0, ?, ?, ?)`;

  return new Promise((resolve, reject) => {
    connection.query(query, [type, name, description, status], (err, results) => {
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

      resolve(
        new Response(
          JSON.stringify({ message: 'Flow successfully created', flow_id: results.insertId }),
          {
            status: 201,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      );
    });
  });
}
