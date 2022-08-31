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
      <div className="flex flex-col border-r-2 border-[#EDB8B8] flex-1">
        <Link href={`/projects/${prevProject.slug}`}>
          <a className="w-16 tracking-[0.30rem] text-[#EDB8B8] text-base uppercase mb-1 animated-link animated-link-pink">
            /prev
          </a>
        </Link>

        <span className="tracking-[0.20rem] text-white mb-4">
          {getCatgeoryText(prevProject.category)}
        </span>

        <span className="text-[#EDB8B8]">{prevProject.title}</span>
      </div>

      <div className="flex flex-col items-end flex-1">
        <Link href={`/projects/${nextProject.slug}`}>
          <a className="w-16 tracking-[0.30rem] text-[#EDB8B8] text-base uppercase mb-1 animated-link animated-link-pink">
            /next
          </a>
        </Link>

        <span className="tracking-[0.20rem] text-white mb-4">
          {getCatgeoryText(nextProject.category)}
        </span>

        <span className="text-[#EDB8B8]">{nextProject.title}</span>
      </div>
    </div>
  </div>
);
