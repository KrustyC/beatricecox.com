import { db, schema } from "@/lib/db";
import { Project } from "@/types/global";

type ProjectForDb = Pick<Project, "sanityId" | "order">;

export async function insertProjects(projects: ProjectForDb[]) {
  await db.transaction(async (tx) => {
    for (const { sanityId } of projects) {
      await tx.insert(schema.projects).values({ sanityId }).onConflictDoUpdate({
        target: schema.projects.sanityId,
        set: { sanityId },
      });
    }
  });
}

export async function insertProjectsRelations(projects: ProjectForDb[]) {
  projects.sort((a, b) => (a.order || 0) - (b.order || 0));

  const projectsForDb = projects.map((project, i) => {
    const nextIndex = i === projects.length - 1 ? 0 : i + 1;

    return {
      sanityId: project.sanityId!,
      successorId: projects[nextIndex].sanityId,
    };
  });

  await db.transaction(async (tx) => {
    for (const { sanityId, successorId } of projectsForDb) {
      await tx
        .insert(schema.projects)
        .values({ sanityId, successorId })
        .onConflictDoUpdate({
          target: schema.projects.sanityId,
          set: { sanityId, successorId },
        });
    }
  });
}

export async function deleteAllProjects() {
  await db.delete(schema.projects);
}
