import dynamic from "next/dynamic";
import Image from "next/image";

import { Project as IProject } from "@/types/global";

import { ProjectNavbar } from "./Navbar";
// import { ProjectsScroller } from "./ProjectsScroller";

const DynamicBlock = dynamic(() => import("./Block"));

interface ProjectProps {
  project: Partial<IProject>;
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div>
      <ProjectNavbar />

      <div className="px-6 md:px-16 lg:px-24">
        <div className="relative w-full aspect-square md:aspect-video rounded-xl">
          <Image
            fill
            className="z-1 rounded-3xl"
            alt={project.mainImage?.description || ""}
            src={project.mainImage?.url || ""}
            // placeholder="blur"
            loading="eager"
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {project.blocks && (
        <div className="flex flex-col">
          {project.blocks.map((block, i) => (
            <DynamicBlock key={i} block={block} />
          ))}
        </div>
      )}

      {/* {project.prevProject && project.nextProject && (
        <ProjectsScroller
          prevProject={project.prevProject}
          nextProject={project.nextProject}
        />
      )} */}
    </div>
  );
};
