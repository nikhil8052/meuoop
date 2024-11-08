import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.formData();
  const file = data.get('image');

  if (!file) {
    return NextResponse.json({ message: "No image found" });
  }

  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);
  const filePath = `./public/${file.name}`;

  await writeFile(filePath, buffer);

  return NextResponse.json({ message: "Upload successful", url: `/${file.name}` });
}
