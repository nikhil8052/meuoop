// src/models/Image.js
import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  flowId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flow',
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  uploaded_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Image || mongoose.model('Image', imageSchema);
