import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import connectDB from "../../../lib/mongodb";
import Category from "../../../lib/models/Category";
import Texture from "../../../lib/models/Texture";
import { authOptions } from "../../../lib/auth";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const includeInactive = searchParams.get("includeInactive") === "true";

    const query = includeInactive ? {} : { isActive: true };

    const categories = await Category.find(query).sort({
      sortOrder: 1,
      name: 1,
    });

    // Update texture count for each category
    for (const category of categories) {
      const textureCount = await Texture.countDocuments({
        category: category.name,
        isActive: true,
      });

      if (category.textureCount !== textureCount) {
        await Category.findByIdAndUpdate(category._id, { textureCount });
        category.textureCount = textureCount;
      }
    }

    return NextResponse.json({
      success: true,
      data: categories,
      total: categories.length,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch categories" },
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

    if (!body.name || !body.description) {
      return NextResponse.json(
        { success: false, error: "Name and description are required" },
        { status: 400 },
      );
    }

    const existingCategory = await Category.findOne({
      name: { $regex: new RegExp(body.name, "i") },
    });

    if (existingCategory) {
      return NextResponse.json(
        { success: false, error: "Category with this name already exists" },
        { status: 400 },
      );
    }

    // Generate slug
    const slug = body.slug || generateSlug(body.name);

    const category = new Category({ ...body, slug });
    await category.save();

    return NextResponse.json({ success: true, data: category }, { status: 201 });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create category" },
      { status: 500 },
    );
  }
}

function generateSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}
