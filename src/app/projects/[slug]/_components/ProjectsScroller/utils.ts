import { eq } from "drizzle-orm";

import { db, schema } from "@/lib/db";

export async function getProjectSuccessorAndPredecessorIds(sanityId: string) {
  try {
    const project = await db.query.projects.findFirst({
      where: eq(schema.projects.sanityId, sanityId),
      with: {
        successor: true,
        predecessor: true,
      },
    });

    if (!project) {
      throw new Error(`Project not found with Sanity ID: ${sanityId}`);
    }

    const { predecessor, successor } = project;

    if (!predecessor) {
      throw new Error(
        `No predecessor defined for project with Sanity ID: ${sanityId}`
      );
    }

    if (!successor) {
      throw new Error(
        `No successor defined for project with Sanity ID: ${sanityId}`
      );
    }

    return {
      prevId: predecessor.sanityId,
      nextId: successor.sanityId,
    };
  } catch (error) {
    console.error(error);
    throw new Error(
      `Failed to get project successor and predecessor IDs: ${error}`
    );
  }
}
