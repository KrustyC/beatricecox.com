import Link from "next/link";

import { getPrevAndNextProjects } from "@/lib/sanity/queries";

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
  projectSanityId: string;
}

export async function ProjectsScroller({
  projectSanityId,
}: ProjectsScrollerProps) {
  try {
    const { prevId, nextId } =
      await getProjectSuccessorAndPredecessorIds(projectSanityId);

    const { prevProject, nextProject } = await getPrevAndNextProjects({
      prevId,
      nextId,
    });

    return (
      <div className="h-[173px] bg-black w-screen flex items-center">
        <div className="project-container flex">
          <div className="flex flex-col justify-between border-r-2 border-primary w-1/2 max-w-1/2 pr-2">
            <div>
              {prevProject.slug && (
                <Link
                  href={`/projects/${encodeURIComponent(prevProject.slug)}`}
                >
                  <span className="w-16 tracking-[0.30rem] text-primary text-base uppercase mb-1 animated-underline animated-underline-pink">
                    /prev
                  </span>
                </Link>
              )}

              <span className="tracking-[0.20rem] text-white mb-4">
                {getCatgeoryText(prevProject.category)}
              </span>
            </div>

            <span className="text-primary text-sm lg:text-base">
              {prevProject.title}
            </span>
          </div>

          <div className="flex flex-col pl-2 w-1/2 max-w-1/2 text-right justify-between items-end">
            <div className="flex flex-col items-end">
              {nextProject.slug && (
                <Link
                  href={`/projects/${encodeURIComponent(nextProject.slug)}`}
                >
                  <span className="w-16 tracking-[0.30rem] text-primary text-base uppercase mb-1 animated-underline animated-underline-pink">
                    /next
                  </span>
                </Link>
              )}

              <span className="tracking-[0.20rem] text-white mb-4">
                {getCatgeoryText(nextProject.category)}
              </span>
            </div>

            <span className="text-primary text-sm lg:text-base">
              {nextProject.title}
            </span>
          </div>
        </div>
      </div>
    );
  } catch {
    return null;
  }
}
