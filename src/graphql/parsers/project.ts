import {
  CarouselBlock as CarouselBlockGraphQL,
  FullScreenBlock as FullScreenBlockGraphQL,
  Project as ProjectGraphQL,
  ProjectBlocksItem as ProjectBlocksItemGraphQL,
  ProjectInfoBlock as ProjectInfoBlockGraphQL,
  Sys,
  TitlesWithSideParagraphsBlock as TitlesWithSideParagraphsBlockGraphQL,
  TitleTextBlock as TitleTextBlockGraphQL,
} from "@/types/generated/graphql";
import {
  CarouselBlock,
  FullScreenBlock,
  Project,
  ProjectBlock,
  ProjectBlockType,
  ProjectInfoBlock,
  TitleAndTextBlock,
  TwoTitlesAndParagraphBlock,
} from "@/types/global";
import { extractImageDataFromContentfulAsset } from "@/utils/images";

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

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

function blockIs<T extends ProjectBlocksItemGraphQL>(
  block: ProjectBlocksItemGraphQL,
  typename: T["__typename"]
): block is T {
  return block.__typename === typename;
}

function parseProjectInfoBlock(
  block: ProjectInfoBlockGraphQL
): Partial<ProjectInfoBlock> {
  return {
    type: ProjectBlockType.PROJECT_INFO,
    title: block.title,
    subtitle: block.subtitle,
    description: block.description,
    info: {
      team: block.team,
      role: block.role,
      skills: block.skills,
      client: block.client,
    },
  };
}

function parseTwoTitlesAndParagraphBlock(
  block: TitlesWithSideParagraphsBlockGraphQL
): Partial<TwoTitlesAndParagraphBlock> {
  return {
    type: ProjectBlockType.TWO_TITLES_AND_PARAGRAPH,
    firstItem: { title: block.title1, paragraph: block.description1 },
    secondItem: { title: block.title2, paragraph: block.description2 },
    backgroundColor: block.colorCode,
  };
}

function parseTitleTextBlock(
  block: TitleTextBlockGraphQL
): Partial<TitleAndTextBlock> {
  return {
    type: ProjectBlockType.TITLE_AND_TEXT,
    title: block.title,
    text: block.description,
    backgroundColor: block.colorCode,
  };
}

function parseFullScreenBlock(
  block: FullScreenBlockGraphQL
): Partial<FullScreenBlock> {
  return {
    type: ProjectBlockType.FULL_SCREEN,
    image: extractImageDataFromContentfulAsset(block.image as any),
  };
}

function parseCarouselBlock(
  block: CarouselBlockGraphQL
): Partial<CarouselBlock> {
  return {
    type: ProjectBlockType.CAROUSEL,
    backgroundColor: block.colorCode,
    title: block.title,
    description: block.carouselDescription,
    pictures:
      block.imagesCollection?.items
        .map((image) => extractImageDataFromContentfulAsset(image as any))
        .filter(notEmpty) || [],
  };
}

function parseBlock(
  block?: ProjectBlocksItemGraphQL
): Partial<ProjectBlock> | null {
  if (!block) return null;

  if (blockIs<ProjectInfoBlockGraphQL>(block, "ProjectInfoBlock")) {
    return parseProjectInfoBlock(block);
  }

  if (
    blockIs<TitlesWithSideParagraphsBlockGraphQL>(
      block,
      "TitlesWithSideParagraphsBlock"
    )
  ) {
    return parseTwoTitlesAndParagraphBlock(block);
  }

  if (blockIs<TitleTextBlockGraphQL>(block, "TitleTextBlock")) {
    return parseTitleTextBlock(block);
  }

  if (blockIs<FullScreenBlockGraphQL>(block, "FullScreenBlock")) {
    return parseFullScreenBlock(block);
  }

  if (blockIs<CarouselBlockGraphQL>(block, "CarouselBlock")) {
    return parseCarouselBlock(block);
  }

  return null;
}

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
