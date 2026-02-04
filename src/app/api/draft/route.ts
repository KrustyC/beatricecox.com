import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

import { env } from "@/lib/env";

import { getProjectById } from "./utils";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const secret = searchParams.get("secret");
  const contentType = searchParams.get("content_type");
  const id = searchParams.get("id");

  if (secret !== env.DRAFT_MODE_SECRET_TOKEN || !id || !contentType) {
    return new Response("Invalid token", { status: 401 });
  }

  let slug;
  try {
    switch (contentType) {
      case "project": {
        const project = await getProjectById(id);
        slug = project?.slug;
        break;
      }
      default:
        return new Response("Invalid content_type", { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return new Response("Invalid id", { status: 400 });
  }

  // If the slug doesn't exist prevent draft mode from being enabled
  if (!slug) {
    return new Response(`Could not find ${contentType} with given id`, {
      status: 404,
    });
  }

  (await draftMode()).enable();

  redirect(`/projects/${slug}`);
}
