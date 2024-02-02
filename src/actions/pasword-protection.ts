"use server";

import { getProjectPassword } from "@/graphql/queries/get-project-with-password.query";
import { getProject } from "@/graphql/queries/get-project.query";

interface IsProjectPasswordCorrectParams {
  slug: string;
  password: string;
  isPreview: boolean;
}

export async function isProjectPasswordCorrect({
  slug,
  password,
  isPreview,
}: IsProjectPasswordCorrectParams) {
  const passwordFromServer = await getProjectPassword({ slug, isPreview });

  if (passwordFromServer === password) {
    return true;
  }

  return false;
}

interface FetchProjectParams {
  slug: string;
  isPreview: boolean;
}

export async function fetchProject({ slug, isPreview }: FetchProjectParams) {
  return await getProject({ slug, isPreview });
}
