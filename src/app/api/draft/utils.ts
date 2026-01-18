import { getProjectById as getSanityProjectById } from "@/sanity/queries";

export async function getProjectById(id: string) {
  const project = await getSanityProjectById(id);

  if (!project) {
    throw new Error(`Could not find project with id ${id}`);
  }

  return {
    slug: project.slug,
  };
}
