// src/app/api/flows/route.js
import { connectToDatabase } from '../lib/mongodb';
import Flow from '../models/Flow'; // assuming Flow is defined in Category.js

export async function GET() {
  try {
    await connectToDatabase(); 
    const flows = await Flow.find(); // Retrieve all flow documents

    return new Response(JSON.stringify(flows), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error fetching flows:", error);
    return new Response(JSON.stringify({
      error: 'Error fetching flows',
      details: error.message,
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function POST(req) {
  try {
    await connectToDatabase();

    const { id, name, description, type, status } = await req.json();

    // Create a new Flow document
    const newFlow = new Flow({
      id,
      name,
      description,
      type,
      status,
    });

    const savedFlow = await newFlow.save();

    return new Response(JSON.stringify(savedFlow), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error creating flow:", error);
    return new Response(JSON.stringify({
      error: 'Error creating flow',
      details: error.message,
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
