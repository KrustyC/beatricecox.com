import { cache } from "react";

import { getClient } from "@/lib/sanity/client";

import {
  ParsedProject,
  parseSanityProject,
  SanityProject,
} from "../parsers/project";

interface GetProjectParams {
  slug: string;
  isPreview?: boolean;
}

interface GetProjectResponse {
  project: ParsedProject | null;
}

// GROQ query to fetch a single project with all its blocks
const projectQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  metaDescription,
  categoryText,
  isPasswordProtected,
  protectionPassword,
  comingSoon,
  mainImage {
    _type,
    alt,
    asset-> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    }
  },
  blocks[] {
    _type,
    _key,
    _type == "projectInfoBlock" => {
      title,
      subtitle,
      description,
      team,
      client,
      role,
      skills
    },
    _type == "carouselBlock" => {
      title,
      "description": carouselDescription,
      colorCode,
      images[] {
        _type,
        alt,
        asset-> {
          _id,
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        }
      }
    },
    _type == "fullScreenBlock" => {
      title,
      image {
        _type,
        alt,
        asset-> {
          _id,
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        }
      }
    },
    _type == "gridBlock" => {
      spacing,
      "gridRows": images[]-> {
        _key,
        images[] {
          _type,
          alt,
          asset-> {
            _id,
            url,
            metadata {
              dimensions {
                width,
                height
              }
            }
          }
        }
      }
    },
    _type == "titleTextBlock" => {
      title,
      "text": description,
      colorCode
    },
    _type == "titlesWithSideParagraphsBlock" => {
      title1,
      description1,
      title2,
      description2,
      colorCode
    }
  }
}`;

export const getProject = cache(
  async ({
    slug,
    isPreview = false,
  }: GetProjectParams): Promise<GetProjectResponse> => {
    try {
      const client = getClient(isPreview);
      const project = await client.fetch<SanityProject | null>(projectQuery, {
        slug,
      });

      if (!project) {
        return {
          project: null,
        };
      }

      return {
        project: parseSanityProject(project),
      };
    } catch (error) {
      console.error("Error fetching project:", error);
      throw new Error(`Failed to fetch project with slug: ${slug}`);
    }
  }
);
