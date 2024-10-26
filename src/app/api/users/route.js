// // src/app/api/users/route.js

// import clientPromise from '@/lib/mongodb';

// export async function GET(req) {
//   const client = await clientPromise;
//   const db = client.db('meuoop');
  
//   const users = await db.collection('users').find({}).toArray();
  
//   return new Response(JSON.stringify(users), {
//     headers: { 'Content-Type': 'application/json' },
//     status: 200,
//   });
// }

// export async function POST(req) {
//   const client = await clientPromise;
//   const db = client.db('meuoop');
  
//   const body = await req.json();
  
//   const result = await db.collection('users').insertOne(body);
  
//   return new Response(JSON.stringify(result), {
//     headers: { 'Content-Type': 'application/json' },
//     status: 201,
//   });
// }
