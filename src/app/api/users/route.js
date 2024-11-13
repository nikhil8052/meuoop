// src/app/api/users/route.js
const { connection } = require('../lib/db'); // Import MySQL connection
const bcrypt = require('bcrypt'); // For hashing the password

export async function GET() {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users';
    
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching users:', err);
        return reject(
          new Response(
            JSON.stringify({
              error: 'Error fetching users',
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
        new Response(JSON.stringify(results), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        })
      );
    });
  });
}

// POST request to create a new user
export async function POST(req) {
  const { name, email, password, role } = await req.json();

  // Input validation
  if (!name || !email || !password || !role) {
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

  // Hash password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = 'INSERT INTO users (name, email, password, type) VALUES (?, ?, ?, ?)';

  return new Promise((resolve, reject) => {
    connection.query(
      query,
      [name, email, hashedPassword, role],
      (err, results) => {
        if (err) {
          console.error('Error inserting user:', err);
          return reject(
            new Response(
              JSON.stringify({
                error: 'Error creating user',
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
            JSON.stringify({ message: 'User successfully created', userId: results.insertId }),
            {
              status: 201,
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
        );
      }
    );
  });
}
