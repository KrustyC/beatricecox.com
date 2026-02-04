import dynamic from "next/dynamic";
import Image from "next/image";

import { Project as IProject } from "@/types/global";

import { ProjectsScroller } from "./ProjectsScroller";

const DynamicBlock = dynamic(() => import("./Block"));

interface ProjectProps {
  project: Partial<IProject> & { sanityId: string };
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div>
      <div className="px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        <div className="relative w-full aspect-square md:aspect-video rounded-3xl bg-slate-300">
          <Image
            fill
            priority
            className="z-1 rounded-3xl"
            alt={project.mainImage?.description || ""}
            src={project.mainImage?.url || ""}
            loading="eager"
            style={{ objectFit: "cover" }}
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

      <ProjectsScroller projectSanityId={project.sanityId} />
    </div>
  );
};
