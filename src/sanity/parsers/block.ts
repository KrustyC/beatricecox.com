import { PortableTextBlock } from "@portabletext/react";

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

import { parseSanityImage, SanityImageExpanded } from "./image";

// Sanity block types
interface SanityProjectInfoBlock {
  _type: "projectInfoBlock";
  _key: string;
  title?: string;
  subtitle?: string;
  description?: PortableTextBlock[];
  team?: string;
  client?: string;
  role?: string;
  skills?: string;
}

interface SanityCarouselBlock {
  _type: "carouselBlock";
  _key: string;
  title?: string;
  description?: PortableTextBlock[] | string;
  colorCode?: string;
  images?: SanityImageExpanded[];
}

interface SanityFullScreenBlock {
  _type: "fullScreenBlock";
  _key: string;
  title?: string;
  image?: SanityImageExpanded;
}

interface SanityGridBlock {
  _type: "gridBlock";
  _key: string;
  spacing?: string;
  gridRows?: Array<{
    _key: string;
    images?: SanityImageExpanded[];
  }>;
}

interface SanityTitleAndTextBlock {
  _type: "titleTextBlock";
  _key: string;
  title?: string;
  text?: PortableTextBlock[];
  colorCode?: string;
}

interface SanityTitlesWithSideParagraphsBlock {
  _type: "titlesWithSideParagraphsBlock";
  _key: string;
  title1?: string;
  description1?: PortableTextBlock[];
  title2?: string;
  description2?: PortableTextBlock[];
  colorCode?: string;
}

export type SanityBlock =
  | SanityProjectInfoBlock
  | SanityCarouselBlock
  | SanityFullScreenBlock
  | SanityGridBlock
  | SanityTitleAndTextBlock
  | SanityTitlesWithSideParagraphsBlock;

function portableTextToPlainString(
  blocks: PortableTextBlock[] | undefined | null
): string {
  if (!blocks?.length) return "";
  return blocks
    .map((block) => {
      if (block._type === "block" && block.children) {
        return block.children
          .map((child) => ("text" in child ? (child.text ?? "") : ""))
          .join("");
      }
      return "";
    })
    .join("\n");
}

function parseProjectInfoBlock(
  block: SanityProjectInfoBlock
): Partial<ProjectInfoBlock> {
  return {
    type: ProjectBlockType.PROJECT_INFO,
    title: block.title || "",
    subtitle: block.subtitle || "",
    description: block.description,
    info: {
      team: block.team,
      role: block.role,
      skills: block.skills,
      client: block.client,
    },
  };
}

function parseCarouselBlock(
  block: SanityCarouselBlock
): Partial<CarouselBlock> {
  const description =
    typeof block.description === "string"
      ? block.description
      : portableTextToPlainString(block.description as PortableTextBlock[]);
  return {
    type: ProjectBlockType.CAROUSEL,
    backgroundColor: block.colorCode,
    title: block.title || "",
    description,
    pictures: block.images?.map(parseSanityImage).filter(notEmpty) || [],
  };
}

function parseFullScreenBlock(
  block: SanityFullScreenBlock
): Partial<FullScreenBlock> {
  return {
    type: ProjectBlockType.FULL_SCREEN,
    title: block.title,
    image: parseSanityImage(block.image),
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

function parseGridBlock(block: SanityGridBlock): Partial<GridBlock> {
  return {
    type: ProjectBlockType.GRID_BLOCK,
    spacing: getGridBlockSpacing(block.spacing),
    gridImages:
      block.gridRows?.map((row) => ({
        images: row.images?.map(parseSanityImage).filter(notEmpty) || [],
      })) || [],
  };
}

function parseTitleAndTextBlock(
  block: SanityTitleAndTextBlock
): Partial<TitleAndTextBlock> {
  return {
    type: ProjectBlockType.TITLE_AND_TEXT,
    title: block.title || "",
    text: block.text,
    backgroundColor: block.colorCode,
  };
}

function parseTwoTitlesAndParagraphBlock(
  block: SanityTitlesWithSideParagraphsBlock
): Partial<TwoTitlesAndParagraphBlock> {
  return {
    type: ProjectBlockType.TWO_TITLES_AND_PARAGRAPH,
    firstItem: {
      title: block.title1,
      paragraph: portableTextToPlainString(block.description1),
    },
    secondItem: {
      title: block.title2,
      paragraph: portableTextToPlainString(block.description2),
    },
    backgroundColor: block.colorCode,
  };
}

export function parseBlock(block?: SanityBlock): Partial<ProjectBlock> | null {
  if (!block) return null;

  switch (block._type) {
    case "projectInfoBlock":
      return parseProjectInfoBlock(block);
    case "carouselBlock":
      return parseCarouselBlock(block);
    case "fullScreenBlock":
      return parseFullScreenBlock(block);
    case "gridBlock":
      return parseGridBlock(block);
    case "titleTextBlock":
      return parseTitleAndTextBlock(block);
    case "titlesWithSideParagraphsBlock":
      return parseTwoTitlesAndParagraphBlock(block);
    default:
      return null;
  }
}
