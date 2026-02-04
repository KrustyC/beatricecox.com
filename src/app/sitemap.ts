import { getClient } from "../lib/sanity/client";

const BASE_PATHS = ["", "/about"];

const projectsQuery = `*[_type == "project"] {
  "slug": slug.current,
  "lastModified": _updatedAt
}`;

async function fetchProjectsRoutes() {
  try {
    const client = getClient();
    const projects =
      await client.fetch<Array<{ slug: string; lastModified: string }>>(
        projectsQuery
      );

    return projects.map(({ slug, lastModified }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${slug}`,
      lastModified,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function sitemap() {
  const baseRoutes = BASE_PATHS.map((path) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${path}`,
    lastModified: new Date().toISOString(),
  }));

  const projectsRoutes = await fetchProjectsRoutes();

  return [...baseRoutes, ...projectsRoutes];
}
