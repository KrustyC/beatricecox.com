import { NextResponse } from "next/server";

import { getClient } from "@/lib/sanity-client";

export const revalidate = 0;

const projectsQuery = `*[_type == "project"] {
  "slug": slug.current,
  "lastModified": _updatedAt
}`;

export async function GET() {
  try {
    const client = getClient();

    const projects =
      await client.fetch<Array<{ slug: string; lastModified: string }>>(
        projectsQuery
      );

    return NextResponse.json({
      success: true,
      projects,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch projects",
    });
  }
}
