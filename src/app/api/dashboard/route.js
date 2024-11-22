const { connection } = require('../lib/db'); // Adjust path as needed

export async function GET(req) {
  const query = `
    SELECT 
      (SELECT COUNT(*) FROM flows) AS total_flows,
      (SELECT COUNT(*) FROM images) AS total_images,
      (SELECT COUNT(*) FROM categories) AS total_categories,
      (SELECT COUNT(*) FROM elements) AS total_elements,
      (SELECT COUNT(*) FROM flows WHERE type = 'ux_flow') AS ux_flow_count,
      (SELECT COUNT(*) FROM flows WHERE type = 'landing_pages') AS landing_pages_count,
      (SELECT COUNT(*) FROM flows WHERE type = 'app_ui') AS app_ui_count
  `;

  return new Promise((resolve, reject) => {
    connection.query(query, [], (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        reject(
          new Response(JSON.stringify({ error: "Database query failed" }), {
            status: 500,
            headers: {
              'Content-Type': 'application/json'
            }
          })
        );
        return;
      }

      resolve(
        new Response(JSON.stringify(results[0]), { // results[0] to get the first row of counts
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        })
      );
    });
  });
}
