import type { Image } from "@/types/global";

// This file is kept for backwards compatibility
// New code should use the Sanity parsers directly

export function extractImageData(
  imageData: { url?: string; description?: string; width?: number; height?: number } | undefined
): Image | undefined {
  if (!imageData) {
    return undefined;
  }

  return {
    url: imageData.url,
    description: imageData.description,
    details: {
      height: imageData.height,
      width: imageData.width,
    },
  };
}
