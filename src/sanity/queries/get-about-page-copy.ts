import { PortableTextBlock } from "@portabletext/react";

import { getClient } from "@/lib/sanity-client";
import { AboutPageCopy } from "@/types/global";

interface GetAboutPageCopyParams {
  isPreview?: boolean;
}

interface SanityAboutPage {
  _id: string;
  headerText?: PortableTextBlock[];
}

const aboutPageQuery = `*[_type == "aboutPage"][0] {
  _id,
  headerText[] {
    ...,
    markDefs[] {
      ...,
      _type == "internalLink" => {
        "slug": reference->slug.current
      }
    }
  }
}`;

export async function getAboutPageCopy({
  isPreview = false,
}: GetAboutPageCopyParams = {}): Promise<AboutPageCopy | undefined> {
  try {
    const client = getClient(isPreview);
    const aboutPage = await client.fetch<SanityAboutPage | null>(
      aboutPageQuery
    );

    if (!aboutPage?.headerText) {
      return undefined;
    }

    return {
      hero: {
        headerText: aboutPage.headerText,
      },
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch About Page copy");
  }
}
