import multer from 'multer';
import fs from 'fs';
import { NextResponse } from 'next/server';

// Configure multer for file upload
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = './public/uploads';
      // Ensure the upload directory exists
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      cb(null, uploadDir); // Specify the directory where images will be stored
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`); // Generate unique file names
    },
  }),
});

// Middleware to handle multer upload
const uploadMiddleware = (req) => {
  return new Promise((resolve, reject) => {
    upload.single('image')(req, {}, (err) => {
      if (err) {
        return reject(err);
      }
      resolve(req.file); // Return the uploaded file information
    });
  });
};

// Define the POST handler for image upload
export async function POST(req) {
  try {
    // Use the middleware to handle the upload
    const file = await uploadMiddleware(req);

    // If file upload was successful, return the file path
    if (file) {
      const filePath = `/uploads/${file.filename}`;
      return NextResponse.json({ path: filePath, _id: Date.now().toString() });
    } else {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }
  } catch (error) {
    console.error("Error during upload:", error.message);
    return NextResponse.json(
      { error: `Upload failed: ${error.message}` },
      { status: 500 }
    );
  }
}
