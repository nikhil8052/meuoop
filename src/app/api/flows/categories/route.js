const { connection } = require('../../lib/db'); // Adjust the path if needed

export async function PUT(req) {
  try {
    const { flowId, elementId, type, isActive } = await req.json();

    // Input validation
    if (!flowId || !elementId || !type || isActive === undefined) {
      return new Response(
        JSON.stringify({
          error: "Flow ID, Category ID, Type, and Active status are required",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Check if the record exists
    const checkQuery = `
      SELECT * 
      FROM flow_categories 
      WHERE flow_id = ? AND category_id = ? AND type = ?
    `;

    const existingRecord = await new Promise((resolve, reject) => {
      connection.query(checkQuery, [flowId, elementId, type], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });

    if (existingRecord.length > 0) {
      // Update the existing record
      const updateQuery = `
        UPDATE flow_categories 
        SET status = ? 
        WHERE flow_id = ? AND category_id = ? AND type = ?
      `;

      await new Promise((resolve, reject) => {
        connection.query(
          updateQuery,
          [isActive ? 1 : 0, flowId, elementId, type],
          (err, results) => {
            if (err) {
              return reject(err);
            }
            resolve(results);
          }
        );
      });

      return new Response(
        JSON.stringify({
          message: "Flow category updated successfully",
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      // Insert the new record
      const insertQuery = `
        INSERT INTO flow_categories (flow_id, category_id, type, status) 
        VALUES (?, ?, ?, ?)
      `;

      await new Promise((resolve, reject) => {
        connection.query(
          insertQuery,
          [flowId, elementId, type, isActive ? 1 : 0],
          (err, results) => {
            if (err) {
              return reject(err);
            }
            resolve(results);
          }
        );
      });

      return new Response(
        JSON.stringify({
          message: "Flow category inserted successfully",
        }),
        {
          status: 201,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error) {
    console.error("Error in flow category API:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
