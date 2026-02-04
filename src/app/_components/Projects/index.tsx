import { draftMode } from "next/headers";

import { getProjects } from "@/sanity/queries";

import { ProjectsList } from "./ProjectsList";

export async function ProjectsListSection() {
  const { isEnabled: isPreviewEnabled } = await draftMode();

  const { projects } = await getProjects({
    isPreview: isPreviewEnabled,
  });

  return <ProjectsList projects={projects} />;
}
