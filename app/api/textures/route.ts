import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import connectDB from "../../../lib/mongodb";
import Texture from "../../../lib/models/Texture";
import { authOptions } from "../../../lib/auth";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");
    const trending = searchParams.get("trending");
    const search = searchParams.get("search");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "12");

    // Build query
    const query: any = { isActive: true };

    if (category && category !== "all") {
      query.category = category;
    }

    if (featured === "true") {
      query.featured = true;
    }

    if (trending === "true") {
      query.trending = true;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { tags: { $in: [new RegExp(search, "i")] } },
      ];
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Execute query with pagination
    const textures = await Texture.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Texture.countDocuments(query);

    return NextResponse.json({
      success: true,
      data: textures,
      pagination: {
        current: page,
        total: Math.ceil(total / limit),
        hasNext: page * limit < total,
        hasPrev: page > 1,
      },
      total,
    });
  } catch (error) {
    console.error("Error fetching textures:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch textures" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "admin") {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    await connectDB();

    const body = await request.json();
    const texture = new Texture(body);
    await texture.save();

    return NextResponse.json({ success: true, data: texture }, { status: 201 });
  } catch (error) {
    console.error("Error creating texture:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create texture" },
      { status: 500 },
    );
  }
}
