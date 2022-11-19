import { Project as IProject } from "@/types/global";
import { ProjectCategory } from "@/types/app";
import Link from "next/link";
import { useProjectsWithFilter } from "./useProjectsWithFilter";
import { Project } from "./Project";

interface ProjectsProps {
  projects: IProject[];
  currentFilter?: ProjectCategory;
}

// @TODO Check if it's possible to put a nice transition on appearing/disappearing items

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  currentFilter,
}) => {
  const [leftColumnProjects, rightColumnProjects] = useProjectsWithFilter({
    projects,
    currentFilter,
  });

  return (
    <div className="bg-white">
      <div className="min-h-[90vh] px-60 py-24 gap-x-20 flex flex-col md:flex-row md:justify-between">
        <div className="flex-1 flex flex-col mt-12">
          {leftColumnProjects.map((project) => (
            <Project key={project._id} project={project} />
          ))}
        </div>

        <div className="flex-1 flex flex-col">
          {rightColumnProjects.map((project) => (
            <Project key={project._id} project={project} />
          ))}
        </div>
      </div>

      <div className="h-20 flex items-center justify-center">
        <Link href="/projects" className="text-black">
          SEE MORE
        </Link>
      </div>
    </div>
  );
};
