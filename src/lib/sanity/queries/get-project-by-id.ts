import { getClient } from "@/lib/sanity/client";

interface SanityProjectById {
  _id: string;
  slug?: { current: string };
}

const projectByIdQuery = `*[_type == "project" && _id == $id][0] {
  _id,
  slug
}`;

export async function getProjectById(
  id: string
): Promise<{ slug?: string } | null> {
  try {
    const client = getClient();
    const project = await client.fetch<SanityProjectById | null>(
      projectByIdQuery,
      { id }
    );

    if (!project) {
      return null;
    }

    return {
      slug: project.slug?.current,
    };
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch project with id: ${id}`);
  }
}
