import { getClient } from "@/lib/sanity/client";
import { Project } from "@/types/global";

interface GetNextAndPrevParams {
  nextId: string;
  prevId: string;
}

interface GetNextAndPrevProjectsResponse {
  prevProject: Pick<Project, "title" | "slug" | "category" | "categoryText">;
  nextProject: Pick<Project, "title" | "slug" | "category" | "categoryText">;
}

interface SanityProjectNav {
  _id: string;
  title?: string;
  slug?: { current: string };
  category?: string;
  categoryText?: string;
}

const prevAndNextQuery = `*[_type == "project" && _id in [$prevId, $nextId]] {
  _id,
  title,
  slug,
  category,
  categoryText
}`;

export async function getPrevAndNextProjects({
  nextId,
  prevId,
}: GetNextAndPrevParams): Promise<GetNextAndPrevProjectsResponse> {
  try {
    const client = getClient();
    const projects = await client.fetch<SanityProjectNav[]>(prevAndNextQuery, {
      nextId,
      prevId,
    });

    const prevProject = projects.find((p) => p._id === prevId);
    const nextProject = projects.find((p) => p._id === nextId);

    return {
      prevProject: {
        title: prevProject?.title,
        slug: prevProject?.slug?.current,
        categoryText: prevProject?.categoryText,
        category: prevProject?.category,
      },
      nextProject: {
        title: nextProject?.title,
        slug: nextProject?.slug?.current,
        categoryText: nextProject?.categoryText,
        category: nextProject?.category,
      },
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch projects");
  }
}
