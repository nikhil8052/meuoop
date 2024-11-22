export async function PUT(req) {
    try {
      const { flowId, categoryId, type, isActive } = await req.json();
  
      // Input validation
      if (!flowId || !categoryId || !type || isActive === undefined) {
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
  
      // Database connection
      const db = await getDBConnection(); // Replace with your DB connection utility
  
      // Check if the record exists
      const checkQuery = `
        SELECT * 
        FROM flow_categories 
        WHERE flow_id = ? AND category_id = ? AND type = ?
      `;
      const [existingRecord] = await db.execute(checkQuery, [
        flowId,
        categoryId,
        type,
      ]);
  
      if (existingRecord.length > 0) {
        // Update the existing record
        const updateQuery = `
          UPDATE flow_categories 
          SET active = ? 
          WHERE flow_id = ? AND category_id = ? AND type = ?
        `;
        await db.execute(updateQuery, [isActive ? 1 : 0, flowId, categoryId, type]);
  
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
          INSERT INTO flow_categories (flow_id, category_id, type, active) 
          VALUES (?, ?, ?, ?)
        `;
        await db.execute(insertQuery, [
          flowId,
          categoryId,
          type,
          isActive ? 1 : 0,
        ]);
  
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
  