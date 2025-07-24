import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../../lib/mongodb";
import Texture from "../../../../../lib/models/Texture";
import mongoose from "mongoose";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    await connectDB();

    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Invalid texture ID" },
        { status: 400 },
      );
    }

    // Get user session/ID from cookies or generate anonymous ID
    const userAgent = request.headers.get("user-agent") || "";
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const anonymousId = Buffer.from(`${ip}-${userAgent}`).toString("base64");

    // Check if user already liked this texture (simple cookie-based check)
    const likedTextures = request.cookies.get("liked_textures");
    const likedList = likedTextures ? JSON.parse(likedTextures.value) : [];

    let newLikedList = [...likedList];
    let liked = false;

    if (likedList.includes(id)) {
      // Unlike
      newLikedList = likedList.filter((textureId: string) => textureId !== id);
      await Texture.findByIdAndUpdate(id, { $inc: { likes: -1 } });
    } else {
      // Like
      newLikedList.push(id);
      liked = true;
      await Texture.findByIdAndUpdate(id, { $inc: { likes: 1 } });
    }

    // Get updated texture
    const texture = await Texture.findById(id);

    if (!texture) {
      return NextResponse.json(
        { success: false, error: "Texture not found" },
        { status: 404 },
      );
    }

    const response = NextResponse.json({
      success: true,
      data: {
        liked,
        likes: texture.likes,
      },
    });

    // Set cookie with liked textures
    response.cookies.set("liked_textures", JSON.stringify(newLikedList), {
      maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return response;
  } catch (error) {
    console.error("Error handling like:", error);
    return NextResponse.json(
      { success: false, error: "Failed to handle like" },
      { status: 500 },
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;

    // Check if texture is liked by this user
    const likedTextures = request.cookies.get("liked_textures");
    const likedList = likedTextures ? JSON.parse(likedTextures.value) : [];

    return NextResponse.json({
      success: true,
      data: {
        liked: likedList.includes(id),
      },
    });
  } catch (error) {
    console.error("Error checking like status:", error);
    return NextResponse.json(
      { success: false, error: "Failed to check like status" },
      { status: 500 },
    );
  }
}
