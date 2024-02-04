import { Project as ProjectGraphQL, Sys } from "@/types/generated/graphql";
import { Project } from "@/types/global";
import { notEmpty } from "@/utils/generic";
import { extractImageDataFromContentfulAsset } from "@/utils/images";

import { parseBlock } from "./block";

export type ParsedProject = Partial<
  Pick<
    Project,
    | "contentfulId"
    | "title"
    | "slug"
    | "categoryText"
    | "metaDescription"
    | "isPasswordProtected"
    | "protectionPassword"
    | "comingSoon"
    | "mainImage"
    | "blocks"
  >
> & { contentfulId: string };

export function parseGraphQLProject(
  graphQLProject: Partial<ProjectGraphQL> & { sys: Sys }
): ParsedProject {
  const mainImage = graphQLProject.mainImage
    ? extractImageDataFromContentfulAsset(graphQLProject.mainImage as any) // Contentful new types are fucking awful, so I had to hack around a bit
    : undefined;

  const parsedBlocks = graphQLProject.blocksCollection?.items.map(parseBlock);

  return {
    ...graphQLProject,
    contentfulId: graphQLProject.sys.id,
    mainImage,
    blocks: (parsedBlocks || []).filter(notEmpty),
  };
}
