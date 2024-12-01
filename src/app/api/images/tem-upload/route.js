import { writeFile, mkdir } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

const TEMP_UPLOAD_DIR = "./public/temp-uploads";

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("image"); // Assume image is provided in the formData

    if (!file) {
      return new Response(JSON.stringify({ message: "Image not found" }), { status: 400 });
    }

    // Ensure the temp-uploads directory exists
    await mkdir(TEMP_UPLOAD_DIR, { recursive: true });

    // Convert file to buffer
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const fileName = `${Date.now()}-${file.name}`; // Unique name
    const filePath = path.join(TEMP_UPLOAD_DIR, fileName);

    // Write the file to the temp directory
    await writeFile(filePath, buffer);

    // Return the file URL
    const fileUrl = `/temp-uploads/${fileName}`;
    return NextResponse.json({ message: "Temporary upload successful", url: fileUrl });
  } catch (error) {
    console.error("Error during temporary upload:", error);
    return new Response(
      JSON.stringify({ message: "Error during temporary upload", details: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
