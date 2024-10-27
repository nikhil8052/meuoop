// src/app/api/models/User.js

import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },         // User's name
  email: { type: String, required: true, unique: true }, // User's email (must be unique)
  status: { type: String, required: true },       // User's status
  type: { type: String, required: true },         // User's type
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

// Create the User model
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
