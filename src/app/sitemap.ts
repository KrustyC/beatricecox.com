const BASE_PATHS = [""];

async function fetchProjectsRoutes() {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`, {
  //   next: { revalidate: 30 },
  // });
  // const { posts } = await res.json();

  // return posts.map((post: { href: string; lastModified: Date }) => ({
  //   url: `${process.env.NEXT_PUBLIC_BASE_URL}${post.href}`,
  //   lastModified: post.lastModified,
  // }));

  return [
    {
      url: "https://beatricecox.com/project/bervini-1955",
      lastModified: "2020-10-30T15:00:00.000Z",
    },
  ];
}

export default async function sitemap() {
  const baseRoutes = BASE_PATHS.map((path) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${path}`,
    lastModified: new Date().toISOString(),
  }));

  const projectsRoutes = await fetchProjectsRoutes();

  return [...baseRoutes, ...projectsRoutes];
}
