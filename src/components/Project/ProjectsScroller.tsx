import Link from "next/link";
import { Project as IProject } from "@/types/global";

interface ProjectProps {
  nextProject: Pick<IProject, "title" | "slug" | "category">;
  prevProject: Pick<IProject, "title" | "slug" | "category">;
}

function getCatgeoryText(category: string) {
  if (category === "UX/UI") {
    return "UX/UI Design";
  }

  if (category === "PACKAGING") {
    return "Packaging";
  }

  return category;
}

export const ProjectsScroller: React.FC<ProjectProps> = ({
  nextProject,
  prevProject,
}) => (
  <div className="h-[173px] bg-black w-screen flex items-center">
    <div className="project-container flex">
      <div className="flex flex-col justify-between border-r-2 border-[#EDB8B8] w-1/2 max-w-1/2 pr-2">
        <div>
          <Link href={`/projects/${encodeURIComponent(prevProject.slug)}`}>
            <span className="w-16 tracking-[0.30rem] text-[#EDB8B8] text-base uppercase mb-1 animated-underline animated-underline-pink">
              /prev
            </span>
          </Link>

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
          <Link href={`/projects/${encodeURIComponent(nextProject.slug)}`}>
            <span className="w-16 tracking-[0.30rem] text-[#EDB8B8] text-base uppercase mb-1 animated-underline animated-underline-pink">
              /next
            </span>
          </Link>

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
