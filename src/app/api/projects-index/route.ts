import { headers } from "next/headers";

import { env } from "@/lib/env";
import { getProjectsListForIndex } from "@/lib/sanity/queries";

import {
  deleteAllProjects,
  insertProjects,
  insertProjectsRelations,
} from "./utils";

export async function POST() {
  const apiKey = (await headers()).get("x-api-key");

  if (!apiKey || apiKey !== env.REBUILD_PROJECTS_INDEX_API_KEY) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  const { projects } = await getProjectsListForIndex();

  await deleteAllProjects();
  await insertProjects(projects);
  await insertProjectsRelations(projects);

  return new Response("Projects index successfully rebuilt", {
    status: 200,
  });
}
