import Image, { ImageProps } from "next/image";
import { Project as IProject } from "@/types/global";

import { Block } from "./Block";
import { ProjectNavbar } from "./Navbar";
import { ProjectsScroller } from "./ProjectsScroller";

interface ProjectProps {
  project: IProject;
  mainImageProps: ImageProps;
}

export const Project: React.FC<ProjectProps> = ({
  project,
  mainImageProps,
}) => {
  return (
    <div>
      <div className="w-screen h-screen relative">
        <div className="absolute top-0 left-0 w-screen z-50 h-[50px]">
          <ProjectNavbar />
        </div>
        <Image
          className="z-1"
          layout="fill"
          objectFit="cover"
          alt="dynosaur"
          src={project.mainImage}
          placeholder="blur"
          blurDataURL={mainImageProps.blurDataURL}
        />
      </div>

      <div className="flex flex-col">
        {project.blocks.map((block, i) => (
          <Block key={i} block={block} />
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
