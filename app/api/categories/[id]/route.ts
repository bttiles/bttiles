import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import connectDB from "../../../../lib/mongodb";
import Category from "../../../../lib/models/Category";
import Texture from "../../../../lib/models/Texture";
import { authOptions } from "../../../../lib/auth";
import mongoose from "mongoose";

// Define an explicit interface for the route context with params
interface CategoryRouteContext {
  params: {
    id: string;
  };
}

export async function GET(
  request: NextRequest,
  // Use the explicitly defined interface for the context
  context: CategoryRouteContext
) {
  const { id } = context.params;

  try {
    await connectDB();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Invalid category ID" },
        { status: 400 }
      );
    }

    const category = await Category.findById(id);

    if (!category) {
      return NextResponse.json(
        { success: false, error: "Category not found" },
        { status: 404 }
      );
    }

    const textureCount = await Texture.countDocuments({
      category: category.name,
      isActive: true,
    });

    if (category.textureCount !== textureCount) {
      await Category.findByIdAndUpdate(id, { textureCount });
      category.textureCount = textureCount;
    }

    return NextResponse.json({ success: true, data: category });
  } catch (error) {
    console.error("Error fetching category:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch category" },
      { status: 500 }
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
        { success: false, error: "Invalid category ID" },
        { status: 400 },
      );
    }

    // Check if another category has the same name
    if (body.name) {
      const existingCategory = await Category.findOne({
        _id: { $ne: id },
        name: { $regex: new RegExp(body.name, "i") },
      });

      if (existingCategory) {
        return NextResponse.json(
          { success: false, error: "Category with this name already exists" },
          { status: 400 },
        );
      }
    }

    const oldCategory = await Category.findById(id);
    const category = await Category.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!category) {
      return NextResponse.json(
        { success: false, error: "Category not found" },
        { status: 404 },
      );
    }

    // If category name changed, update all textures
    if (oldCategory && oldCategory.name !== category.name) {
      await Texture.updateMany(
        { category: oldCategory.name },
        { category: category.name },
      );
    }

    return NextResponse.json({ success: true, data: category });
  } catch (error) {
    console.error("Error updating category:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update category" },
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
        { success: false, error: "Invalid category ID" },
        { status: 400 },
      );
    }

    const category = await Category.findById(id);

    if (!category) {
      return NextResponse.json(
        { success: false, error: "Category not found" },
        { status: 404 },
      );
    }

    // Check if there are textures using this category
    const textureCount = await Texture.countDocuments({
      category: category.name,
      isActive: true,
    });

    if (textureCount > 0) {
      return NextResponse.json(
        {
          success: false,
          error: `Cannot delete category. ${textureCount} textures are using this category.`,
        },
        { status: 400 },
      );
    }

    await Category.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete category" },
      { status: 500 },
    );
  }
}
