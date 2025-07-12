import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../../lib/mongodb";
import Texture from "../../../../../lib/models/Texture";
import UserInteraction from "../../../../../lib/models/UserInteraction";
import mongoose from "mongoose";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    await connectDB();

    const { id } = params;
    const body = await request.json();
    const { action, sessionId } = body; // action: 'like', 'save', 'view'

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Invalid texture ID" },
        { status: 400 },
      );
    }

    if (!sessionId) {
      return NextResponse.json(
        { success: false, error: "Session ID required" },
        { status: 400 },
      );
    }

    // Find or create user interaction
    let interaction = await UserInteraction.findOne({
      sessionId,
      textureId: id,
    });

    if (!interaction) {
      interaction = new UserInteraction({
        sessionId,
        textureId: id,
      });
    }

    let updateTexture = {};

    switch (action) {
      case "like":
        const wasLiked = interaction.liked;
        interaction.liked = !interaction.liked;
        updateTexture = {
          $inc: { likes: interaction.liked ? 1 : -1 },
        };
        break;

      case "save":
        interaction.saved = !interaction.saved;
        break;

      case "view":
        if (!interaction.viewed) {
          interaction.viewed = true;
          updateTexture = { $inc: { views: 1 } };
        }
        break;

      default:
        return NextResponse.json(
          { success: false, error: "Invalid action" },
          { status: 400 },
        );
    }

    await interaction.save();

    // Update texture stats if needed
    if (Object.keys(updateTexture).length > 0) {
      await Texture.findByIdAndUpdate(id, updateTexture);
    }

    // Get updated texture
    const texture = await Texture.findById(id);

    return NextResponse.json({
      success: true,
      data: {
        texture,
        interaction: {
          liked: interaction.liked,
          saved: interaction.saved,
          viewed: interaction.viewed,
        },
      },
    });
  } catch (error) {
    console.error("Error handling interaction:", error);
    return NextResponse.json(
      { success: false, error: "Failed to handle interaction" },
      { status: 500 },
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    await connectDB();

    const { id } = params;
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("sessionId");

    if (!sessionId) {
      return NextResponse.json(
        { success: false, error: "Session ID required" },
        { status: 400 },
      );
    }

    const interaction = await UserInteraction.findOne({
      sessionId,
      textureId: id,
    });

    return NextResponse.json({
      success: true,
      data: interaction || { liked: false, saved: false, viewed: false },
    });
  } catch (error) {
    console.error("Error fetching interaction:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch interaction" },
      { status: 500 },
    );
  }
}
