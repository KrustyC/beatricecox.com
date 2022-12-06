import Image, { ImageProps } from "next/image";
import dynamic from "next/dynamic";
import { Project as IProject } from "@/types/global";
import { ProjectNavbar } from "./Navbar";
import { ProjectsScroller } from "./ProjectsScroller";

const DynamicBlock = dynamic(() => import("./Block"));

interface ProjectProps {
  project: IProject;
  mainImageProps: Omit<ImageProps, "alt">;
}

export const Project: React.FC<ProjectProps> = ({
  project,
  mainImageProps,
}) => {
  return (
    <div>
      <div className="w-screen h-[309px] lg:h-screen relative">
        <div className="absolute top-0 left-0 w-screen z-50 h-[50px]">
          <ProjectNavbar />
        </div>
        <Image
          className="z-1"
          alt={project.title}
          src={project.mainImage}
          placeholder="blur"
          blurDataURL={mainImageProps.blurDataURL}
          fill
          loading="eager"
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
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
