import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import connectDB from "../../../../lib/mongodb";
import Texture from "../../../../lib/models/Texture";
import { authOptions } from "../../../../lib/auth";
import mongoose from "mongoose";

export async function GET(
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

    const texture = await Texture.findOne({ _id: id, isActive: true });

    if (!texture) {
      return NextResponse.json(
        { success: false, error: "Texture not found" },
        { status: 404 },
      );
    }

    // Increment view count (non-blocking)
    Texture.findByIdAndUpdate(id, { $inc: { views: 1 } }).exec();

    return NextResponse.json({ success: true, data: texture });
  } catch (error) {
    console.error("Error fetching texture:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch texture" },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "admin") {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    await connectDB();

    const { id } = params;
    const body = await request.json();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Invalid texture ID" },
        { status: 400 },
      );
    }

    const texture = await Texture.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!texture) {
      return NextResponse.json(
        { success: false, error: "Texture not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: texture });
  } catch (error) {
    console.error("Error updating texture:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update texture" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "admin") {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    await connectDB();

    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Invalid texture ID" },
        { status: 400 },
      );
    }

    // Soft delete by setting isActive to false
    // const texture = await Texture.findByIdAndUpdate(
    //   id,
    //   { isActive: false },
    //   { new: true },
    // );
    const texture = await Texture.findByIdAndDelete(id);

    if (!texture) {
      return NextResponse.json(
        { success: false, error: "Texture not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, message: "Texture deleted" });
  } catch (error) {
    console.error("Error deleting texture:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete texture" },
      { status: 500 },
    );
  }
}
