import prisma from "@/lib/prisma";
import { Project } from "@/types/global";

interface ProjectForPrisma extends Pick<Project, "contentfulId" | "order"> {}

export async function insertProjects(projects: ProjectForPrisma[]) {
  const writeProjects = projects.map(({ contentfulId }) =>
    prisma.project.upsert({
      where: { contentfulId },
      update: { contentfulId },
      create: { contentfulId },
    })
  );

  await prisma.$transaction(writeProjects);
}

export async function insertProjectsRelations(projects: ProjectForPrisma[]) {
  projects.sort((a, b) => (a.order || 0) - (b.order || 0));

  const projectsForFigma = projects.map((project, i) => {
    const nextIndex = i === projects.length - 1 ? 0 : i + 1;

    return {
      contentfulId: project.contentfulId!,
      successorId: projects[nextIndex].contentfulId,
    };
  });

  const writeProjectsRelations = projectsForFigma.map(
    ({ contentfulId, successorId }) =>
      prisma.project.upsert({
        where: { contentfulId },
        update: { contentfulId, successorId },
        create: { contentfulId, successorId },
      })
  );

  await prisma.$transaction(writeProjectsRelations);
}
