import mongoose from "mongoose";

const UserInteractionSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
    },
    textureId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Texture",
      required: true,
    },
    liked: {
      type: Boolean,
      default: false,
    },
    saved: {
      type: Boolean,
      default: false,
    },
    viewed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// Create compound index for efficient queries
UserInteractionSchema.index({ sessionId: 1, textureId: 1 }, { unique: true });

export default mongoose.models.UserInteraction ||
  mongoose.model("UserInteraction", UserInteractionSchema);
