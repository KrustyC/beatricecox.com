import dynamic from "next/dynamic";
import Image, { ImageProps } from "next/image";

import { Project as IProject } from "@/types/global";

import { ProjectNavbar } from "./Navbar";
import { ProjectsScroller } from "./ProjectsScroller";

const DynamicBlock = dynamic(() => import("./Block"));

interface ProjectProps {
  project: IProject;
  // mainImageProps: Omit<ImageProps, "alt">;
}

export const Project: React.FC<ProjectProps> = ({
  project,
  // mainImageProps,
}) => {
  return (
    <div>
      <ProjectNavbar />

      <div className="px-6 md:px-16 lg:px-24">
        <div className="relative w-full aspect-square md:aspect-video rounded-xl">
          <Image
            className="z-1 rounded-3xl"
            alt={project.title}
            src={project.mainImage}
            placeholder="blur"
            // blurDataURL={mainImageProps.blurDataURL}
            fill
            loading="eager"
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div className="flex flex-col">
        {project.blocks.map((block, i) => (
          <DynamicBlock key={i} block={block} />
        ))}
      </div>

      {project.prevProject && project.nextProject && (
        <ProjectsScroller
          prevProject={project.prevProject}
          nextProject={project.nextProject}
        />
      )}
    </div>
  );
};
