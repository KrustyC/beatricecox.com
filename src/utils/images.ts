import type { Asset } from "@/types/generated/graphql";
import type { Image } from "@/types/global";

export function extractImageDataFromContentfulAsset(
  contentfulAsset: Asset | undefined
): Image | undefined {
  if (!contentfulAsset) {
    return undefined;
  }

  return {
    url: contentfulAsset.url!,
    description: contentfulAsset.description!,
    details: {
      height: contentfulAsset.height!,
      width: contentfulAsset.width!,
    },
  };
}
