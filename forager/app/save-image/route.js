// app/save-image/route.js
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { imageData } = await request.json();

    // Validate the imageData
    if (!imageData || !imageData.startsWith("data:image")) {
      throw new Error("Invalid image data format");
    }

    // Extract base64 data from Data URL
    const base64Data = imageData.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");
        
    // Define the directory path (public/images)
    const dataFolder = join(process.cwd(), "public", "images");
    
    // Save the file
    const filePath = join(dataFolder, "userimage.png");
    await writeFile(filePath, buffer);
    
    console.log(`Image saved to: ${filePath}`);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Image saved successfully',
      path: filePath,
      filename: 'userimage.png'
    });
  } catch (error) {
    console.error('Error saving image:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to save image' },
      { status: 500 }
    );
  }
}