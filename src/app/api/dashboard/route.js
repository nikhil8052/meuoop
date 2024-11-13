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

