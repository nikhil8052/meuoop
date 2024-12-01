import prisma from '@/lib/prisma';

export async function GET(req) {
  try {
    // Get all counts using Prisma's aggregate functions
    const [totalFlows, totalImages, totalCategories, totalElements, uxFlowCount, landingPagesCount, appUiCount] = await Promise.all([
      prisma.flows.count(),
      prisma.images.count(),
      prisma.categories.count(),
      prisma.elements.count(),
      prisma.flows.count({ where: { type: 'ux_flow' } }),
      prisma.flows.count({ where: { type: 'landing_page' } }),
      prisma.flows.count({ where: { type: 'app_ui' } })
    ]);

    // Respond with the counts in a JSON format
    return new Response(
      JSON.stringify({
        total_flows: totalFlows,
        total_images: totalImages,
        total_categories: totalCategories,
        total_elements: totalElements,
        ux_flow_count: uxFlowCount,
        landing_pages_count: landingPagesCount,
        app_ui_count: appUiCount
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (err) {
    console.error('Error executing query:', err);
    return new Response(
      JSON.stringify({ error: 'Database query failed' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
