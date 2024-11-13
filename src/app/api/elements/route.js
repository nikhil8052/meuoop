// Import necessary modules
const { connection } = require('../lib/db'); // Adjust path as needed


export async function GET(req) {

  const query = `select * from elements`;
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

  // Insert values into `flows`, with `id` auto-incremented by the database
  const query = `INSERT INTO elements (name) VALUES (?)`;

  return new Promise((resolve, reject) => {
    connection.query(query, [ name], (err, results) => {
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
