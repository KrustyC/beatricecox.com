import { urlFor } from "@/lib/sanity-image";
import type { Image } from "@/types/global";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
    url?: string;
    metadata?: {
      dimensions?: {
        width: number;
        height: number;
      };
    };
  };
  alt?: string;
}

export interface SanityImageExpanded {
  _type: "image";
  asset: {
    _id: string;
    url: string;
    metadata: {
      dimensions: {
        width: number;
        height: number;
      };
    };
  };
  alt?: string;
}

export function parseSanityImage(
  sanityImage: SanityImage | SanityImageExpanded | undefined | null
): Image | undefined {
  if (!sanityImage || !sanityImage.asset) {
    return undefined;
  }

  // Check if we have an expanded asset with url
  const asset = sanityImage.asset as SanityImageExpanded["asset"];
  const url = asset.url || urlFor(sanityImage).url();
  const dimensions = asset.metadata?.dimensions;

  return {
    url,
    description: sanityImage.alt,
    details: {
      height: dimensions?.height,
      width: dimensions?.width,
    },
  };
}
