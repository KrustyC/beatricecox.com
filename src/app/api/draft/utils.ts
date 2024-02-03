import { getContentfulClient } from "@/utils/contentful-client";

export async function getProjectById(id: string) {
  const client = getContentfulClient({ preview: true });

  const result = await client.getEntries({
    "sys.id": id,
    content_type: "project",
    select: ["fields.slug"],
  });

  if (result?.items.length === 0) {
    throw new Error(`Could not find project with id ${id}`);
  }

  const post = result?.items[0];

  return {
    slug: post.fields.slug as unknown as string,
  };
}
