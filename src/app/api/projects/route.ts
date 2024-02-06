import { NextResponse } from "next/server";

import { getContentfulClient } from "@/utils/contentful-client";

export const revalidate = 0;

export async function GET() {
  try {
    const client = getContentfulClient();

    const result = await client.getEntries({
      content_type: "project",
      select: ["fields.slug", "sys.updatedAt"],
    });

    const projects = result?.items.map((project) => ({
      lastModified: project.sys.updatedAt,
      slug: project.fields.slug as unknown as string,
    }));

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
