import { PortableTextBlock } from "@portabletext/react";

import { Project } from "@/types/global";
import { notEmpty } from "@/utils/generic";

import { parseBlock, SanityBlock } from "./block";
import { parseSanityImage, SanityImageExpanded } from "./image";

export interface SanityProject {
  _id: string;
  title?: string;
  slug?: { current: string };
  mainImage?: SanityImageExpanded;
  thumbnailImage?: SanityImageExpanded;
  order?: number;
  category?: string;
  categoryText?: string;
  intro?: string;
  metaDescription?: string;
  description?: PortableTextBlock[];
  team?: string;
  year?: number;
  role?: string;
  skills?: string;
  client?: string;
  isPasswordProtected?: boolean;
  protectionPassword?: string;
  comingSoon?: boolean;
  blocks?: SanityBlock[];
}

export type ParsedProject = Partial<
  Pick<
    Project,
    | "sanityId"
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
> & { sanityId: string };

export function parseSanityProject(
  sanityProject: SanityProject
): ParsedProject {
  const mainImage = parseSanityImage(sanityProject.mainImage);
  const parsedBlocks = sanityProject.blocks?.map(parseBlock);

  return {
    ...sanityProject,
    sanityId: sanityProject._id,
    slug: sanityProject.slug?.current,
    mainImage,
    blocks: (parsedBlocks || []).filter(notEmpty),
  };
}

export interface SanityProjectListItem {
  _id: string;
  title?: string;
  slug?: { current: string };
  intro?: string;
  category?: string;
  categoryText?: string;
  thumbnailImage?: SanityImageExpanded;
  order?: number;
  comingSoon?: boolean;
  isPasswordProtected?: boolean;
}

export function parseSanityProjectListItem(
  project: SanityProjectListItem
): Pick<
  Project,
  | "sanityId"
  | "title"
  | "slug"
  | "intro"
  | "category"
  | "categoryText"
  | "thumbnailImage"
  | "order"
  | "comingSoon"
  | "isPasswordProtected"
> {
  return {
    sanityId: project._id,
    title: project.title,
    slug: project.slug?.current,
    intro: project.intro,
    category: project.category,
    categoryText: project.categoryText,
    thumbnailImage: parseSanityImage(project.thumbnailImage),
    order: project.order,
    comingSoon: project.comingSoon,
    isPasswordProtected: project.isPasswordProtected,
  };
}
