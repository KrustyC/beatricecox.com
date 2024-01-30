import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { Document } from "@contentful/rich-text-types";

import {
  // Asset as AssetGraphQL,
  Project as ProjectGraphQL,
} from "@/types/generated/graphql";
import { Project, RichTextAsset } from "@/types/global";
import { extractImageDataFromContentfulAsset } from "@/utils/images";

export function parseGraphQLProject(graphQLProject: ProjectGraphQL): Project {
  const mainImage = graphQLProject.mainImage
    ? extractImageDataFromContentfulAsset(graphQLProject.mainImage as any) // Contentful new types are fucking awful, so I had to hack around a bit
    : undefined;

  const thumbnailImage = graphQLProject.thumbnailImage
    ? extractImageDataFromContentfulAsset(graphQLProject.thumbnailImage as any) // Contentful new types are fucking awful, so I had to hack around a bit
    : undefined;

  // const plainTextString = graphQLProject.richtext
  //   ? documentToPlainTextString(graphQLProject.richtext.json)
  //   : "";

  return {
    ...graphQLProject,
    // richtext: {
    //   json: graphQLProject.richtext?.json as unknown as Document,
    // },
    // href: graphQLProject.slug
    //   ? generateProjectHref(graphQLProject.slug, graphQLProject.country)
    //   : undefined,
    mainImage: mainImage,
    thumbnailImage: thumbnailImage,
  };
}

// interface NextProject
//   extends Pick<
//     Project,
//     "title" | "slug" | "mainImage" | "date" | "smallIntro" | "href"
//   > {}

// export function parseGraphQLNextProject(
//   nextProject: ProjectGraphQL
// ): NextProject {
//   const mainImage = nextProject.mainImage
//     ? extractImageDataFromContentfulAsset(nextProject.mainImage)
//     : undefined;

//   return {
//     title: nextProject.title,
//     slug: nextProject.slug,
//     smallIntro: nextProject.smallIntro,
//     date: nextProject.date,
//     mainImage,
//   };
// }
