import {
  CarouselBlock as CarouselBlockGraphQL,
  FullScreenBlock as FullScreenBlockGraphQL,
  GridBlock as GridBlockGraphQL,
  ProjectBlocksItem as ProjectBlocksItemGraphQL,
  ProjectInfoBlock as ProjectInfoBlockGraphQL,
  TitlesWithSideParagraphsBlock as TitlesWithSideParagraphsBlockGraphQL,
  TitleTextBlock as TitleTextBlockGraphQL,
} from "@/types/generated/graphql";
import {
  CarouselBlock,
  FullScreenBlock,
  GridBlock,
  GridBlockSpacing,
  ProjectBlock,
  ProjectBlockType,
  ProjectInfoBlock,
  TitleAndTextBlock,
  TwoTitlesAndParagraphBlock,
} from "@/types/global";
import { notEmpty } from "@/utils/generic";
import { extractImageDataFromContentfulAsset } from "@/utils/images";

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

function getGridBlockSpacing(
  spacing: string | null | undefined
): GridBlockSpacing {
  if (spacing === "xs") return GridBlockSpacing.EXTRA_SMALL;
  if (spacing === "sm") return GridBlockSpacing.SMALL;
  if (spacing === "md") return GridBlockSpacing.MEDIUM;
  if (spacing === "lg") return GridBlockSpacing.LARGE;
  if (spacing === "xl") return GridBlockSpacing.EXTRA_LARGE;
  if (spacing === "2xl") return GridBlockSpacing.EXTRA_EXTRA_LARGE;
  return GridBlockSpacing.MEDIUM;
}

function parseGridBlock(block: GridBlockGraphQL): Partial<GridBlock> {
  return {
    type: ProjectBlockType.GRID_BLOCK,
    spacing: getGridBlockSpacing(block.spacing),
    gridImages:
      block.imagesCollection?.items.map((item) => ({
        images:
          item?.imagesCollection?.items
            .map((image) => extractImageDataFromContentfulAsset(image as any))
            .filter(notEmpty) || [],
      })) || [],
  };
}

export function parseBlock(
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

  if (blockIs<GridBlockGraphQL>(block, "GridBlock")) {
    return parseGridBlock(block);
  }

  return null;
}
