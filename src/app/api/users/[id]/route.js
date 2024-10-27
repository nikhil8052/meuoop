// src/app/api/users/[id]/route.js
import { connectToDatabase } from '../../lib/mongodb';
import User from '../../models/User';
import { ObjectId } from 'mongodb'; // Import ObjectId from mongodb

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    await connectToDatabase();

    // Convert id to ObjectId for MongoDB compatibility
    const user = await User.findByIdAndDelete(new ObjectId(id));

    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: 'User deleted successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error deleting user', details: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
