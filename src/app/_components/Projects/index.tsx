import { draftMode } from "next/headers";

import { getProjects } from "@/graphql/queries/get-projects-list";

import { ProjectsList } from "./ProjectsList";

export default async function ProjectsListSection() {
  const { isEnabled: isPreviewEnabled } = draftMode();

  const { projects } = await getProjects({
    isPreview: isPreviewEnabled,
  });

  projects.sort((a, b) => (a.order || 0) - (b.order || 0));

  return <ProjectsList projects={projects} />;
}
