"use client";

// Generate a unique session ID for anonymous users
export function getSessionId(): string {
  if (typeof window === "undefined") return "";

  let sessionId = localStorage.getItem("tiletextures_session");

  if (!sessionId) {
    sessionId = generateSessionId();
    localStorage.setItem("tiletextures_session", sessionId);
  }

  return sessionId;
}

function generateSessionId(): string {
  return (
    Date.now().toString(36) +
    Math.random().toString(36).substr(2) +
    Math.random().toString(36).substr(2)
  );
}

// Texture interaction functions
export async function likeTexture(textureId: string): Promise<any> {
  const sessionId = getSessionId();

  try {
    const response = await fetch(`/api/textures/${textureId}/interact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "like",
        sessionId,
      }),
    });

    return await response.json();
  } catch (error) {
    console.error("Error liking texture:", error);
    throw error;
  }
}

export async function saveTexture(textureId: string): Promise<any> {
  const sessionId = getSessionId();

  try {
    const response = await fetch(`/api/textures/${textureId}/interact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "save",
        sessionId,
      }),
    });

    return await response.json();
  } catch (error) {
    console.error("Error saving texture:", error);
    throw error;
  }
}

export async function getTextureInteraction(textureId: string): Promise<any> {
  const sessionId = getSessionId();

  try {
    const response = await fetch(
      `/api/textures/${textureId}/interact?sessionId=${sessionId}`,
    );
    return await response.json();
  } catch (error) {
    console.error("Error getting texture interaction:", error);
    throw error;
  }
}
