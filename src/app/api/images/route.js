import { writeFile } from "fs/promises";
import { NextResponse } from "next/server"; // Ensure NextResponse is imported correctly
const { connection } = require('../lib/db'); // Adjust path as needed

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get('image');
    const flowId = data.get('flow_id'); // Assume flow_id is provided in the formData
    const status = data.get('status'); // Assume flow_id is provided in the formData
    const order_id = data.get('order_id'); // Assume flow_id is provided in the formData



    if (!file) {
      return new Response(JSON.stringify({ message: "Image not found" }), { status: 401 });
    }

    if (!flowId) {
      return new Response(JSON.stringify({ message: "flow_id is required" }), { status: 400 });
    }

    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const fileName = `${Date.now()}-${file.name}`; // Unique name to avoid overwriting
    const filePath = `./public/${fileName}`; // Ensure this path is correct and accessible

    // Write the file to the public directory
    await writeFile(filePath, buffer);

    // Save the file path and flow_id in the database
    const query = `INSERT INTO images (flow_id, url, order_id, status) VALUES (?, ?, ?,?)`;
    await new Promise((resolve, reject) => {
      connection.query(query, [flowId, fileName, order_id, status], (err, results) => {
        if (err) {
          console.error("Error saving image to database:", err);
          return reject(
            new Response(JSON.stringify({ message: "Database error", details: err.message }), {
              status: 500,
              headers: { "Content-Type": "application/json" },
            })
          );
        }
        resolve(results);
      });
    });

    // Return success response with the file URL
    return NextResponse.json({ message: "Upload and save successful", url: `/${fileName}` });
  } catch (error) {
    console.error("Error uploading file:", error);
    return new Response(JSON.stringify({ message: "Error uploading file", details: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
