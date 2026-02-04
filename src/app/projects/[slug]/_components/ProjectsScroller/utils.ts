import prisma from "@/lib/prisma";

export async function getProjectSuccessorAndPredecessorIds(sanityId: string) {
  const { successor, predecessor } = await prisma.project.findUniqueOrThrow({
    select: {
      successor: {
        select: {
          sanityId: true,
        },
      },
      predecessor: {
        select: {
          sanityId: true,
        },
      },
    },
    where: {
      sanityId: sanityId,
    },
  });

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
}
