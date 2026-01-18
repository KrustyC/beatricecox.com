import { getClient } from "@/lib/sanity-client";

interface GetProjectPasswordParams {
  slug: string;
  isPreview?: boolean;
}

const projectPasswordQuery = `*[_type == "project" && slug.current == $slug][0] {
  protectionPassword
}`;

// @TODO I should create a sanityFetch util function

export async function getProjectPassword({
  slug,
  isPreview = false,
}: GetProjectPasswordParams): Promise<string | undefined> {
  try {
    const client = getClient(isPreview);
    const project = await client.fetch<{ protectionPassword?: string } | null>(
      projectPasswordQuery,
      { slug }
    );

    return project?.protectionPassword || undefined;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch project password with slug: ${slug}`);
  }
}
