import prisma from "@/lib/prisma";

export async function getProjectSuccessorAndPredecessorIds(
  contentfulId: string
) {
  const { successor, predecessor } = await prisma.project.findUniqueOrThrow({
    select: {
      successor: {
        select: {
          contentfulId: true,
        },
      },
      predecessor: {
        select: {
          contentfulId: true,
        },
      },
    },
    where: {
      contentfulId: contentfulId,
    },
  });

  if (!predecessor) {
    throw new Error(
      `No predecessor defined for project with contentful ID: ${contentfulId}`
    );
  }

  if (!successor) {
    throw new Error(
      `No successor defined for project with contentful ID: ${contentfulId}`
    );
  }

  return {
    prevId: predecessor.contentfulId,
    nextId: successor.contentfulId,
  };
}
