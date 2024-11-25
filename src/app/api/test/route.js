// src/app/api/flows/route.js
import prisma from '@/lib/prisma';

export async function GET(req) {
  try {
    const flows = await prisma.flows.findMany();
    return new Response(JSON.stringify(flows), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error fetching flows' }), { status: 500 });
  }
}

