import { getClient } from "@/lib/sanity-client";
import { Project } from "@/types/global";

import {
  parseSanityProjectListItem,
  SanityProjectListItem,
} from "../parsers/project";

interface GetProjectsParams {
  isPreview?: boolean;
}

interface GetProjectsResponse {
  projects: Array<
    Pick<
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
    >
  >;
}

const projectsListQuery = `*[_type == "project"] | order(order asc) {
  _id,
  title,
  slug,
  intro,
  category,
  categoryText,
  order,
  comingSoon,
  isPasswordProtected,
  thumbnailImage {
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
}`;

export async function getProjects({
  isPreview = false,
}: GetProjectsParams = {}): Promise<GetProjectsResponse> {
  try {
    const client = getClient(isPreview);
    const projects = await client.fetch<SanityProjectListItem[]>(
      projectsListQuery
    );

    projects.sort((a, b) => (a.order || 0) - (b.order || 0));

    return {
      projects: projects?.map(parseSanityProjectListItem) || [],
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch projects");
  }
}
