import { PortableTextBlock } from "@portabletext/react";

import { getClient } from "@/lib/sanity-client";
import { HomepageCopy } from "@/types/global";

interface GetHomepageCopyParams {
  isPreview?: boolean;
}

interface SanityHomepage {
  _id: string;
  quote?: PortableTextBlock[];
  mainText?: PortableTextBlock[];
}

const homepageQuery = `*[_type == "homepage"][0] {
  _id,
  quote,
  mainText
}`;

export async function getHomepageCopy({
  isPreview = false,
}: GetHomepageCopyParams = {}): Promise<HomepageCopy | undefined> {
  try {
    const client = getClient(isPreview);
    const homepage = await client.fetch<SanityHomepage | null>(homepageQuery);

    if (!homepage) {
      return undefined;
    }

    return {
      quote: homepage.quote,
      mainText: homepage.mainText,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch homepage copy");
  }
}
