import { getClient } from "@/lib/sanity-client";
import { HomepageCopy } from "@/types/global";

import { parsePortableTextToRichText } from "../parsers/richtext";

interface GetHomepageCopyParams {
  isPreview?: boolean;
}

interface SanityHomepage {
  _id: string;
  quote?: any[];
  mainText?: any[];
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

    if (!homepage?.quote || !homepage?.mainText) {
      return undefined;
    }

    return {
      quote: parsePortableTextToRichText(homepage.quote),
      mainText: parsePortableTextToRichText(homepage.mainText),
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch homepage copy");
  }
}
