// src/models/Category.js
import mongoose from 'mongoose';

const flowSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  status: {
    type: String,
    enum: ['published', 'not_published'],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

// Export the model
export default mongoose.models.Flow || mongoose.model('Flow', flowSchema);
