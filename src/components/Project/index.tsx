import Image, { ImageProps } from "next/image";
import { Project as IProject } from "@/types/global";
import parse from "html-react-parser";
import { ProjectNavbar } from "./Navbar";

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

      <div className="flex flex-col justify-center px-40 py-40">
        <div className="flex flex-col w-1/2 mx-auto">
          <h1 className="text-3xl font-thin">{project.title}</h1>
          <span className="text-l text-[#8C8C8C] font-thin mt-2">
            {project.category}
          </span>

          <div className="text-l mt-8">{parse(project.intro)}</div>
        </div>
      </div>
    </div>
  );
};
