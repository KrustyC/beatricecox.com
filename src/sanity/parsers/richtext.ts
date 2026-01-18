import { PortableTextBlock } from "@portabletext/react";

import { RichText } from "@/types/global";

// Convert Sanity Portable Text to the RichText format expected by components
// The new RichText component will handle Portable Text directly,
// but we need to maintain the interface for compatibility
export function parsePortableTextToRichText(
  portableText: PortableTextBlock[] | undefined | null
): RichText {
  if (!portableText) {
    return { json: undefined };
  }

  // Store the portable text in a format the RichText component can use
  // We'll update the RichText component to handle both formats
  return {
    json: portableText,
  };
}
