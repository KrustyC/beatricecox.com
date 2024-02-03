import { Document } from "@contentful/rich-text-types";

export type ProjectLink<T> = Partial<T> & {
  _id: string;
};

export enum ProjectCategory {
  PACKAGING = "Packaging",
  UX_UI = "UX/UI",
  INDUSTRIAL = "Industrial",
  PACKAGING_AND_UI = "Packaging & UI",
  OTHER = "OTHER",
}

export interface RichTextAsset {
  id: string;
  title?: string;
  description?: string;
  contentType?: string;
  width?: number;
  height?: number;
  url?: string;
}

export interface RichText {
  json?: Document;
  assets?: Array<RichTextAsset | undefined>;
}

export interface Image {
  url?: string;
  title?: string;
  description?: string;
  details: {
    height?: number;
    width?: number;
  };
}
export interface Project {
  contentfulId: string;
  title?: string;
  slug?: string;
  mainImage?: Image;
  thumbnailImage?: Image;
  order?: number;
  category?: string;
  categoryText?: string;
  intro?: string;
  metaDescription?: string;
  description?: RichText;
  team?: string;
  year?: number;
  role?: string;
  skills?: string;
  client?: string;
  isPasswordProtected?: boolean;
  protectionPassword?: string;
  comingSoon?: boolean;
  blocks: (Partial<BaseBlock> | ProjectBlock)[];
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

export interface RichText {
  json?: Document;
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
  description: RichText;
  info: {
    team?: string;
    client?: string;
    role?: string;
    skills?: string;
  };
}

export interface TwoTitlesAndParagraphBlock extends BaseBlock {
  type: ProjectBlockType.TWO_TITLES_AND_PARAGRAPH;
  firstItem: Partial<{ title: string; paragraph: string }>;
  secondItem: Partial<{ title: string; paragraph: string }>;
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
  pictures: Image[];
}

export interface TitleAndTextBlock extends BaseBlock {
  type: ProjectBlockType.TITLE_AND_TEXT;
  title: string;
  text: RichText;
}

export interface FullScreenBlock extends BaseBlock {
  type: ProjectBlockType.FULL_SCREEN;
  title: string;
  image: Image;
}

export interface NextOrPrevProject
  extends Pick<Project, "title" | "slug" | "category" | "categoryText"> {}
