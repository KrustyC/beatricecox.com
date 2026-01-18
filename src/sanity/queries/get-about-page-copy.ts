import { getClient } from "@/lib/sanity-client";
import { AboutPageCopy, InlineEntryHyperlink } from "@/types/global";

interface GetAboutPageCopyParams {
  isPreview?: boolean;
}

interface SanityAboutPage {
  _id: string;
  headerText?: any[];
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

    // Extract internal links from the portable text
    const links: InlineEntryHyperlink[] = [];
    aboutPage.headerText.forEach((block: any) => {
      if (block.markDefs) {
        block.markDefs.forEach((mark: any) => {
          if (mark._type === "internalLink" && mark.slug) {
            links.push({
              id: mark._key,
              href: `/projects/${mark.slug}`,
            });
          }
        });
      }
    });

    return {
      hero: {
        headerText: aboutPage.headerText as any,
        links,
      },
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch About Page copy");
  }
}
