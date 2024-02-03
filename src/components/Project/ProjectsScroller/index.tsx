import Link from "next/link";

import { getPrevAndNextProjects } from "@/graphql/queries/get-prev-and-next-projects";

import { getProjectSuccessorAndPredecessorIds } from "./utils";

function getCatgeoryText(category: string | undefined) {
  if (category === "UX/UI") {
    return "UX/UI Design";
  }

  if (category === "PACKAGING") {
    return "Packaging";
  }

  return category;
}

interface ProjectsScrollerProps {
  projectContentfulId: string;
}

export async function ProjectsScroller({
  projectContentfulId,
}: ProjectsScrollerProps) {
  try {
    const { prevId, nextId } =
      await getProjectSuccessorAndPredecessorIds(projectContentfulId);

    const { prevProject, nextProject } = await getPrevAndNextProjects({
      prevId,
      nextId,
    });

    return (
      <div className="h-[173px] bg-black w-screen flex items-center">
        <div className="project-container flex">
          <div className="flex flex-col justify-between border-r-2 border-[#EDB8B8] w-1/2 max-w-1/2 pr-2">
            <div>
              {prevProject.slug && (
                <Link
                  href={`/projects/${encodeURIComponent(prevProject.slug)}`}
                >
                  <span className="w-16 tracking-[0.30rem] text-[#EDB8B8] text-base uppercase mb-1 animated-underline animated-underline-pink">
                    /prev
                  </span>
                </Link>
              )}

              <span className="tracking-[0.20rem] text-white mb-4">
                {getCatgeoryText(prevProject.category)}
              </span>
            </div>

            <span className="text-[#EDB8B8] text-sm lg:text-base">
              {prevProject.title}
            </span>
          </div>

          <div className="flex flex-col pl-2 w-1/2 max-w-1/2 text-right justify-between items-end">
            <div className="flex flex-col items-end">
              {nextProject.slug && (
                <Link
                  href={`/projects/${encodeURIComponent(nextProject.slug)}`}
                >
                  <span className="w-16 tracking-[0.30rem] text-[#EDB8B8] text-base uppercase mb-1 animated-underline animated-underline-pink">
                    /next
                  </span>
                </Link>
              )}

              <span className="tracking-[0.20rem] text-white mb-4">
                {getCatgeoryText(nextProject.category)}
              </span>
            </div>

            <span className="text-[#EDB8B8] text-sm lg:text-base">
              {nextProject.title}
            </span>
          </div>
        </div>
      </div>
    );
  } catch (e) {
    return null;
  }
}
