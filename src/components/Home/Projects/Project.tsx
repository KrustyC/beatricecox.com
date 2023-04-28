import Link from "next/link";
import parse from "html-react-parser";
import { Project as IProject } from "@/types/global";

interface ProjectsProps {
  project: IProject;
}

export const Project: React.FC<ProjectsProps> = ({ project }) => {
  return (
    <div className="mb-20 lg:mb-40 last:mb-0 flex relative flex-col">
      <div className="aspect-w-1 aspect-h-1 bg-gray-100"></div>

      {project.comingSoon ? (
        <div className="flex flex-col">
          <div className="relative">
            <div className="tracking-[0.35em] absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase bg-black text-white text-lg py-3 w-[230px] text-center">
              coming soon
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="opacity-30"
              src={project.listingImage}
              alt={project.title}
            />
          </div>
          <h3 className="text-3xl font-thin mt-8 text-black">
            {project.title}
          </h3>
        </div>
      ) : (
        <Link href={`/projects/${project.slug}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.listingImage} alt={project.title} />
          <h3 className="text-3xl font-thin cursor-pointer mt-8 text-black">
            {project.title}
          </h3>
        </Link>
      )}

      <span className="text-xl text-[#8C8C8C] mt-1">
        {project.category} - {project.year}
      </span>
      <div className="mt-4">{parse(project.intro)}</div>
    </div>
  );
};
