const BASE_PATHS = [""];

async function fetchProjectsRoutes() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
      {
        next: { revalidate: 30 },
      }
    );

    const { projects } = await res.json();

    return projects.map(
      ({ slug, lastModified }: { slug: string; lastModified: Date }) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`,
        lastModified,
      })
    );
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
