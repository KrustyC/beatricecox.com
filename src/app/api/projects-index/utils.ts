import prisma from "@/lib/prisma";
import { Project } from "@/types/global";

type ProjectForPrisma = Pick<Project, "sanityId" | "order">;

export async function insertProjects(projects: ProjectForPrisma[]) {
  const writeProjects = projects.map(({ sanityId }) =>
    prisma.project.upsert({
      where: { sanityId },
      update: { sanityId },
      create: { sanityId },
    })
  );

  await prisma.$transaction(writeProjects);
}

export async function insertProjectsRelations(projects: ProjectForPrisma[]) {
  projects.sort((a, b) => (a.order || 0) - (b.order || 0));

  const projectsForDb = projects.map((project, i) => {
    const nextIndex = i === projects.length - 1 ? 0 : i + 1;

    return {
      sanityId: project.sanityId!,
      successorId: projects[nextIndex].sanityId,
    };
  });

  const writeProjectsRelations = projectsForDb.map(
    ({ sanityId, successorId }) =>
      prisma.project.upsert({
        where: { sanityId },
        update: { sanityId, successorId },
        create: { sanityId, successorId },
      })
  );

  await prisma.$transaction(writeProjectsRelations);
}

export async function deleteAllProjects() {
  await prisma.project.deleteMany();
}
