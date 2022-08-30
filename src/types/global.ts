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

  intro: string;
  description: string;

  mainImage: string;
  listingImage: string;

  blocks: (Partial<BaseBlock> | ProjectBlock)[];
}

export enum ProjectBlockType {
  PROJECT_INFO = "project-info",
  TWO_TITLES_AND_PARAGRAPH = "two-title-and-paragraph",
  DESCRIPTION_AND_PICS = "description-and-pics-block",
}

export type ProjectBlock =
  | ProjectInfoBlock
  | TwoTitlesAndParagraphBlock
  | DescriptionAndPicsBlock;

export interface BaseBlock {
  id: string;
  order: number;
  backgroundColor: string;
}

export interface ProjectInfoItem {
  name: string;
  value: string;
}

export interface ProjectInfoBlock extends BaseBlock {
  type: ProjectBlockType.PROJECT_INFO;
  title: string;
  subtitle: string;
  description: string;
  items: ProjectInfoItem[];
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
}
