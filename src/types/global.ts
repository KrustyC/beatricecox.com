import type { ProjectCategory } from "./app";

export enum REST_METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

// @TODO All of these needs to properly aligned once I know what a project looks like

export type ProjectLink<T> = Partial<T> & {
  _id: string;
};

export type FormProjectImage = {
  image: string;
};

export interface Project {
  _id?: number;
  img: string;
  title: string;
  slug: string;
  year: number;
  category: ProjectCategory | string;
  order: number;
  comingSoon?: boolean;

  intro: string;
  description: string;

  mainImage: string;
  listingImage: string;

  blocks: (Partial<BaseBlock> | ProjectBlock)[];

  nextProject?: Pick<Project, "title" | "slug" | "category">;
  prevProject?: Pick<Project, "title" | "slug" | "category">;
}

export enum ProjectBlockType {
  PROJECT_INFO = "project-info",
  TWO_TITLES_AND_PARAGRAPH = "two-title-and-paragraph",
  DESCRIPTION_AND_PICS = "description-and-pics-block",
  FOUR_IMAGES_WITH_TEXT = "four-pictures-with-text",
  CAROUSEL = "carousel",
  TITLE_AND_TEXT = "title-and-text",
  FULL_SCREEN = "full-screen",
}

export type ProjectBlock =
  | ProjectInfoBlock
  | TwoTitlesAndParagraphBlock
  | DescriptionAndPicsBlock
  | FourImagesWithTextBlock
  | CarouselBlock
  | FullScreenBlock
  | TitleAndTextBlock;

export interface BaseBlock {
  id: string;
  type: ProjectBlockType;
  order: number;
  backgroundColor: string;
}

export interface ProjectInfoBlock extends BaseBlock {
  type: ProjectBlockType.PROJECT_INFO;
  title: string;
  subtitle: string;
  description: string;
  info: {
    team?: string;
    client?: string;
    date?: string;
    role?: string;
    skills?: string;
  };
}

export interface TwoTitlesAndParagraphBlock extends BaseBlock {
  type: ProjectBlockType.TWO_TITLES_AND_PARAGRAPH;
  firstItem: { title: string; paragraph: string };
  secondItem: { title: string; paragraph: string };
}

export interface DescriptionAndPicsBlock extends BaseBlock {
  type: ProjectBlockType.DESCRIPTION_AND_PICS;
  title: string;
  description: string;
  pictures: string[];
  showVertical?: boolean;
  noVerticalPadding?: boolean;
}

export interface ImageWithText {
  text: string;
  img: string;
}

export interface FourImagesWithTextBlock extends BaseBlock {
  type: ProjectBlockType.FOUR_IMAGES_WITH_TEXT;
  image1: ImageWithText;
  image2: ImageWithText;
  image3: ImageWithText;
  image4: ImageWithText;
}

export interface CarouselBlock extends BaseBlock {
  type: ProjectBlockType.CAROUSEL;
  title: string;
  description: string;
  pictures: string[];
}

export interface TitleAndTextBlock extends BaseBlock {
  type: ProjectBlockType.TITLE_AND_TEXT;
  title: string;
  text: string;
}

export interface FullScreenBlock extends BaseBlock {
  type: ProjectBlockType.FULL_SCREEN;
  title: string;
  image: string;
}
