import { getClient } from "@/lib/sanity/client";
import { Project } from "@/types/global";

interface GetProjectListsForIndexResponse {
  projects: Array<Pick<Project, "sanityId" | "order">>;
}

const projectsListForIndexQuery = `*[_type == "project"] | order(order asc) {
  _id,
  order
}`;

interface ProjectForSanity {
  _id: string;
  order?: number;
}

export async function getProjectsListForIndex(): Promise<GetProjectListsForIndexResponse> {
  try {
    const client = getClient();
    const projects = await client.fetch<ProjectForSanity[]>(
      projectsListForIndexQuery
    );

    if (!projects) {
      return {
        projects: [],
      };
    }

    return {
      projects: projects.map((project) => ({
        sanityId: project._id,
        order: project.order,
      })),
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch projects");
  }
}
